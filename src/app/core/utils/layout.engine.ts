import { Node, Edge } from 'ng-diagram';
import { Character, Spouse } from '../models/character.model';

export function calculateLayout(
  characters: Character[],
  nodeWidth = 220,
  nodeHeight = 80,
  verticalGap = 160,
  horizontalGap = 80,
  spouseGap = 40
): { nodes: Node[]; edges: Edge[] } {
  // 1. Active character sets
  const activeIds = new Set(characters.map(c => c.id));
  const characterMap = new Map<string, Character>(characters.map(c => [c.id, c]));

  // Helper: get spouse IDs that exist in the active characters list
  const activeSpouseIds = (char: Character): string[] =>
    char.spouses.filter(s => activeIds.has(s.id)).map(s => s.id);

  // Helper: get spouse IDs that do NOT exist in the active characters (ghost spouses)
  const ghostSpouses = (char: Character): Spouse[] =>
    char.spouses.filter(s => !activeIds.has(s.id));

  // Helper: check if this character is listed as a spouse by any active character
  const isSpouseOfActive = (id: string): boolean =>
    characters.some(c => c.spouses.some(s => s.id === id));

  // Helper: generate a deterministic, visually distinct color from a mother's ID.
  // Uses a simple hash → HSL palette with warm-toned hues to fit the dark medieval theme.
  function motherColor(motherId: string): string {
    // Hash the string to a number
    let hash = 0;
    for (let i = 0; i < motherId.length; i++) {
      hash = (hash * 31 + motherId.charCodeAt(i)) & 0xffffffff;
    }
    // Map to a hue in 0-360, skip pure reds (0-20, 340-360) to avoid confusion with spouse lines
    const hue = ((Math.abs(hash) % 300) + 20) % 360;
    return `hsl(${hue}, 65%, 58%)`;
  }

  // 2. Compute generations (depth)
  const depthMap = new Map<string, number>();

  function getDepth(id: string, visited = new Set<string>()): number {
    if (visited.has(id)) return 0;
    if (depthMap.has(id)) return depthMap.get(id)!;

    if (id === 'visenya' || id === 'rhaenys') {
      depthMap.set(id, 1);
      return 1;
    }

    const char = characterMap.get(id);
    if (!char) return 0;

    visited.add(id);

    const activeParents = char.parents.filter(pId => activeIds.has(pId));

    let depth = 0;
    if (activeParents.length > 0) {
      depth = Math.max(...activeParents.map(pId => getDepth(pId, new Set(visited)))) + 1;
    } else {
      for (const sId of activeSpouseIds(char)) {
        const spouse = characterMap.get(sId);
        if (spouse) {
          const spouseParents = spouse.parents.filter(pId => activeIds.has(pId));
          if (spouseParents.length > 0) {
            depth = Math.max(...spouseParents.map(pId => getDepth(pId, new Set(visited)))) + 1;
            break;
          }
        }
      }
    }

    depthMap.set(id, depth);
    return depth;
  }

  for (const char of characters) {
    getDepth(char.id);
  }

  // 3. Identify which characters are parents of others in the active list
  const parentIds = new Set<string>();
  for (const c of characters) {
    c.parents.forEach(pId => parentIds.add(pId));
  }

  // 4. Detect childless spouses:
  //    Active characters who are someone's spouse, have no active parents, and no children.
  const childlessSpouses = new Set<string>();
  for (const c of characters) {
    if (c.id === 'aegon-i') continue;

    const hasNoParents = c.parents.filter(pId => activeIds.has(pId)).length === 0;
    const hasNoChildren = !parentIds.has(c.id);

    if (isSpouseOfActive(c.id) && hasNoParents && hasNoChildren) {
      childlessSpouses.add(c.id);
    }
  }

  // 5. Group characters by generation (excluding childless spouses)
  const generations: Map<number, string[]> = new Map();
  for (const char of characters) {
    if (childlessSpouses.has(char.id)) continue;
    const d = depthMap.get(char.id) ?? 0;
    if (!generations.has(d)) generations.set(d, []);
    generations.get(d)!.push(char.id);
  }

  const maxDepth = generations.size > 0 ? Math.max(...generations.keys()) : 0;

  // 6. Position nodes — VERTICAL layout:
  //    x = generation column (depth * horizontalGap)
  //    y = position within column (sibling index * verticalGap)
  const positions = new Map<string, { x: number; y: number }>();

  for (let g = 0; g <= maxDepth; g++) {
    const idsInGen = generations.get(g) || [];
    if (idsInGen.length === 0) continue;

    // Group into couple/single items (same logic as before)
    const items: Array<{ type: 'single' | 'couple'; ids: string[] }> = [];
    const localVisited = new Set<string>();

    for (const id of idsInGen) {
      if (localVisited.has(id)) continue;
      const char = characterMap.get(id)!;
      const activeSpouse = activeSpouseIds(char).find(
        sId => idsInGen.includes(sId) && !localVisited.has(sId)
      );
      if (activeSpouse) {
        items.push({ type: 'couple', ids: [id, activeSpouse] });
        localVisited.add(id);
        localVisited.add(activeSpouse);
      } else {
        items.push({ type: 'single', ids: [id] });
        localVisited.add(id);
      }
    }

    // Sort items by average parent Y (since we're now vertical)
    items.sort((a, b) => {
      const getAvgParentY = (ids: string[]) => {
        let sumY = 0, count = 0;
        for (const id of ids) {
          const char = characterMap.get(id)!;
          for (const pId of char.parents) {
            const pPos = positions.get(pId);
            if (pPos) { sumY += pPos.y; count++; }
          }
        }
        return count > 0 ? sumY / count : 400; // default to vertical center
      };
      return getAvgParentY(a.ids) - getAvgParentY(b.ids);
    });

    // X is fixed for this generation column
    const x = g * (nodeWidth + horizontalGap);

    // Compute total height and center vertically around y=400
    const heights = items.map(item =>
      item.type === 'couple' ? nodeHeight * 2 + spouseGap : nodeHeight
    );
    const totalHeight = heights.reduce((s, h) => s + h, 0) + (items.length - 1) * verticalGap;
    let startY = 400 - totalHeight / 2;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type === 'couple') {
        const [id1, id2] = item.ids;
        // Couple: id1 on top, id2 below
        positions.set(id1, { x, y: startY });
        positions.set(id2, { x, y: startY + nodeHeight + spouseGap });
        startY += nodeHeight * 2 + spouseGap + verticalGap;
      } else {
        const [id] = item.ids;
        positions.set(id, { x, y: startY });
        startY += nodeHeight + verticalGap;
      }
    }
  }

  // 7. Build spouse label groups (childless active spouses + ghost spouses)
  const nodes: Node[] = [];
  const groupedSpouseIds = new Set<string>();

  for (const char of characters) {
    if (childlessSpouses.has(char.id)) continue;

    // a) Active childless spouses
    const activeChildless = char.spouses.filter(
      s => activeIds.has(s.id) && childlessSpouses.has(s.id)
    );

    // b) Ghost spouses (not in active list at all)
    const ghosts = ghostSpouses(char);

    // Build unified label list: { id, nome, corTexto }
    const labels: Spouse[] = [
      ...activeChildless.map(s => ({
        id: s.id,
        nome: s.nome,
        corTexto: s.corTexto
      })),
      ...ghosts.map(s => ({
        id: s.id,
        nome: s.nome,
        corTexto: s.corTexto
      }))
    ];

    if (labels.length > 0) {
      const spousePos = positions.get(char.id);
      if (spousePos) {
        const groupHeight = labels.length * 36;

        nodes.push({
          id: `${char.id}-spouses`,
          type: 'childless-spouse',
          position: {
            // In vertical layout: spouse labels sit above the character card
            x: spousePos.x,
            y: spousePos.y - groupHeight - 12
          },
          size: { width: 180, height: Math.max(groupHeight, 36) },
          autoSize: false,
          data: {
            id: `${char.id}-spouses`,
            name: '',
            house: char.house,
            gender: 'female',
            imageUrl: '',
            isBastard: false,
            isKingOrQueen: false,
            parents: [],
            spouses: [],
            spousesList: labels
          } as any
        });

        activeChildless.forEach(s => groupedSpouseIds.add(s.id));
      }
    }
  }

  // Add all other characters as standard nodes
  for (const char of characters) {
    if (groupedSpouseIds.has(char.id)) continue;
    nodes.push({
      id: char.id,
      type: 'targaryen',
      position: positions.get(char.id) ?? { x: 0, y: 0 },
      size: { width: nodeWidth, height: nodeHeight },
      autoSize: false,
      data: char
    });
  }

  // 8. Build edges
  const edges: Edge[] = [];
  const spousalEdgeIds = new Set<string>();

  for (const char of characters) {
    if (groupedSpouseIds.has(char.id)) continue;

    // Edge from spouse-label group to this character
    const hasSpouseGroup = nodes.some(n => n.id === `${char.id}-spouses`);
    if (hasSpouseGroup) {
      const edgeKey = `${char.id}-spousegroup`;
      if (!spousalEdgeIds.has(edgeKey)) {
        spousalEdgeIds.add(edgeKey);
        edges.push({
          id: `spouse-${char.id}-group`,
          source: `${char.id}-spouses`,
          sourcePort: 'port-bottom', // label group above → connect bottom to card top
          target: char.id,
          targetPort: 'port-top',
          data: {
            isSpouseConnection: true,
            spouse1Id: `${char.id}-spouses`,
            spouse2Id: char.id
          }
        });
      }
    }

    // Standard spouse-to-spouse edges (both active, neither is childless)
    for (const s of char.spouses) {
      if (!activeIds.has(s.id)) continue;
      if (childlessSpouses.has(s.id) || childlessSpouses.has(char.id)) continue;

      const edgeKey = [char.id, s.id].sort().join('-spouse-');
      if (spousalEdgeIds.has(edgeKey)) continue;
      spousalEdgeIds.add(edgeKey);

      // In vertical layout couples are stacked top/bottom → use port-bottom ↔ port-top
      const depth1 = depthMap.get(char.id) ?? 0;
      const depth2 = depthMap.get(s.id) ?? 0;
      // Same generation = stacked vertically → bottom/top
      // Different generation = shouldn't normally happen for spouses, fallback right/left
      let sourcePort = depth1 === depth2 ? 'port-bottom' : 'port-right';
      let targetPort = depth1 === depth2 ? 'port-top'   : 'port-left';

      edges.push({
        id: `spouse-${char.id}-${s.id}`,
        source: char.id,
        sourcePort,
        target: s.id,
        targetPort,
        data: { isSpouseConnection: true, spouse1Id: char.id, spouse2Id: s.id }
      });
    }
  }

  // Parent-child edges
  for (const char of characters) {
    if (groupedSpouseIds.has(char.id)) continue;

    const activeParents = char.parents.filter(pId => activeIds.has(pId));
    if (activeParents.length === 0) continue;

    const motherId = activeParents.find(pId => characterMap.get(pId)?.gender === 'female');
    const sourceParentId = motherId || activeParents[0];

    edges.push({
      id: `child-${sourceParentId}-${char.id}`,
      source: sourceParentId,
      sourcePort: 'port-right',  // Vertical layout: parent is to the LEFT → connect right side
      target: char.id,
      targetPort: 'port-left',   // Child is to the RIGHT → connect left side
      data: {
        isChildConnection: true,
        parentId: sourceParentId,
        childId: char.id,
        isBastard: char.isBastard,
        motherColor: char.isBastard ? null : motherColor(sourceParentId)
      }
    });
  }

  return { nodes, edges };
}
