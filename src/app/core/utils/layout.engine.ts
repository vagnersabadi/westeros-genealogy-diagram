import { Node, Edge } from 'ng-diagram';
import { Character } from '../models/character.model';

export function calculateLayout(
  characters: Character[],
  nodeWidth = 220,
  nodeHeight = 80,
  verticalGap = 160,
  horizontalGap = 80,
  spouseGap = 40
): { nodes: Node[]; edges: Edge[] } {
  // 1. Filter out spouses/parents that are not in the current active list
  const activeIds = new Set(characters.map(c => c.id));
  const characterMap = new Map<string, Character>(characters.map(c => [c.id, c]));

  // 2. Compute generations (depth)
  const depthMap = new Map<string, number>();

  // Helper to compute depth recursively
  function getDepth(id: string, visited = new Set<string>()): number {
    if (visited.has(id)) return 0; // Avoid cycles
    if (depthMap.has(id)) return depthMap.get(id)!;

    if (id === 'visenya' || id === 'rhaenys') {
      depthMap.set(id, 1);
      return 1;
    }

    const char = characterMap.get(id);
    if (!char) return 0;

    visited.add(id);

    // Filter parents that are actually in the active list
    const activeParents = char.parents.filter(pId => activeIds.has(pId));

    let depth = 0;
    if (activeParents.length > 0) {
      depth = Math.max(...activeParents.map(pId => getDepth(pId, new Set(visited)))) + 1;
    } else {
      // Check if spouses have parents
      const activeSpouses = char.spouses.filter(sId => activeIds.has(sId));
      for (const sId of activeSpouses) {
        const spouse = characterMap.get(sId);
        if (spouse && spouse.parents.filter(pId => activeIds.has(pId)).length > 0) {
          depth = Math.max(...spouse.parents.filter(pId => activeIds.has(pId)).map(pId => getDepth(pId, new Set(visited)))) + 1;
          break;
        }
      }
    }

    depthMap.set(id, depth);
    return depth;
  }

  // Calculate depths
  for (const char of characters) {
    getDepth(char.id);
  }
  console.log("DEBUG DEPTHMAP:", Array.from(depthMap.entries()));

  // Identify characters that are parent of someone in the current active list
  const parentIds = new Set<string>();
  for (const c of characters) {
    c.parents.forEach(pId => parentIds.add(pId));
  }

  // Identify childless spouses: married to someone in list, but have no parents and no children in active list
  const childlessSpouses = new Set<string>();
  for (const c of characters) {
    if (c.id === 'aegon-i') continue; // Aegon I is the patriarch, never a childless spouse
    
    const isSpouseOfSomeone = characters.some(other => other.spouses.includes(c.id));
    const hasNoParents = c.parents.filter(pId => activeIds.has(pId)).length === 0;
    const hasNoChildren = !parentIds.has(c.id);

    if (isSpouseOfSomeone && hasNoParents && hasNoChildren) {
      childlessSpouses.add(c.id);
    }
  }

  // 3. Group characters by generation (excluding childless spouses)
  const generations: Map<number, string[]> = new Map();
  for (const char of characters) {
    if (childlessSpouses.has(char.id)) continue; // Exclude childless spouses from main generation rows

    const d = depthMap.get(char.id) ?? 0;
    if (!generations.has(d)) {
      generations.set(d, []);
    }
    generations.get(d)!.push(char.id);
  }

  const maxDepth = generations.size > 0 ? Math.max(...generations.keys()) : 0;

  // 4. Position nodes generation-by-generation
  const positions = new Map<string, { x: number; y: number }>();
  const processedSpouses = new Set<string>();

  for (let g = 0; g <= maxDepth; g++) {
    const idsInGen = generations.get(g) || [];
    if (idsInGen.length === 0) continue;

    // We want to sort them so that children are close to parents, and spouses are adjacent
    // Let's create ordered couples/singles list
    const items: Array<{ type: 'single' | 'couple'; ids: string[] }> = [];
    const localVisited = new Set<string>();

    for (const id of idsInGen) {
      if (localVisited.has(id)) continue;
      const char = characterMap.get(id)!;
      const activeSpouse = char.spouses.find(sId => idsInGen.includes(sId) && !localVisited.has(sId));

      if (activeSpouse) {
        items.push({ type: 'couple', ids: [id, activeSpouse] });
        localVisited.add(id);
        localVisited.add(activeSpouse);
      } else {
        items.push({ type: 'single', ids: [id] });
        localVisited.add(id);
      }
    }

    // Try to sort the items at generation g based on the average X coordinate of their parents at generation g-1
    items.sort((a, b) => {
      const getAvgParentX = (ids: string[]) => {
        let sumX = 0;
        let count = 0;
        for (const id of ids) {
          const char = characterMap.get(id)!;
          for (const pId of char.parents) {
            const pPos = positions.get(pId);
            if (pPos) {
              sumX += pPos.x;
              count++;
            }
          }
        }
        return count > 0 ? sumX / count : 1000; // default to center
      };

      return getAvgParentX(a.ids) - getAvgParentX(b.ids);
    });

    // Lay out horizontally
    const y = g * verticalGap;
    let currentX = 0;

    // First pass to assign positions based on index
    const widths: number[] = [];
    for (const item of items) {
      if (item.type === 'couple') {
        widths.push(nodeWidth * 2 + spouseGap);
      } else {
        widths.push(nodeWidth);
      }
    }

    const totalWidth = widths.reduce((sum, w) => sum + w, 0) + (items.length - 1) * horizontalGap;
    // Center the generation around x = 600 to be in visible viewport space
    let startX = 600 - totalWidth / 2;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type === 'couple') {
        const [id1, id2] = item.ids;
        // Place spouse 1 and spouse 2 side-by-side
        positions.set(id1, { x: startX, y });
        positions.set(id2, { x: startX + nodeWidth + spouseGap, y });
        startX += nodeWidth * 2 + spouseGap + horizontalGap;
      } else {
        const [id] = item.ids;
        positions.set(id, { x: startX, y });
        startX += nodeWidth + horizontalGap;
      }
    }
  }

  // 4.5 Position childless spouses vertically on the left of their spouses
  for (const char of characters) {
    if (childlessSpouses.has(char.id)) continue;

    // Find active childless spouses of this character
    const activeChildlessSpouses = char.spouses.filter(
      sId => activeIds.has(sId) && childlessSpouses.has(sId)
    );

    if (activeChildlessSpouses.length > 0) {
      const spousePos = positions.get(char.id);
      if (spousePos) {
        const N = activeChildlessSpouses.length;
        const spouseHeight = 42; // smaller Y space for simpler labels
        // Center the vertical stack of childless spouses around the main spouse card Y center
        const startY = spousePos.y + (nodeHeight / 2) - ((N - 1) * spouseHeight) / 2;

        for (let i = 0; i < N; i++) {
          const sId = activeChildlessSpouses[i];
          positions.set(sId, {
            x: spousePos.x - 220, // positioned to the left of the card (offset by 220px)
            y: startY + i * spouseHeight - 20 // adjust to center vertically
          });
        }
      }
    }
  }

  // 5. Build nodes for ng-diagram
  const nodes: Node[] = [];
  const groupedSpouseIds = new Set<string>();

  // Create grouped childless spouse nodes first
  for (const char of characters) {
    if (childlessSpouses.has(char.id)) continue;

    const activeChildlessSpouses = char.spouses.filter(
      sId => activeIds.has(sId) && childlessSpouses.has(sId)
    );

    if (activeChildlessSpouses.length > 0) {
      const spousePos = positions.get(char.id);
      if (spousePos) {
        const spouseObjects = activeChildlessSpouses.map(sId => characterMap.get(sId)!);
        const groupHeight = activeChildlessSpouses.length * 36;

        nodes.push({
          id: `${char.id}-spouses`,
          type: 'childless-spouse',
          position: {
            x: spousePos.x - 220, // Positioned on the left of Maegor's card
            y: spousePos.y + (nodeHeight / 2) - (groupHeight / 2)
          },
          size: { width: 180, height: groupHeight },
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
            spousesList: spouseObjects
          } as any
        });

        activeChildlessSpouses.forEach(sId => groupedSpouseIds.add(sId));
      }
    }
  }

  // Add all other active characters as standard nodes
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

  // 6. Build edges for ng-diagram
  const edges: Edge[] = [];
  const spousalEdgeIds = new Set<string>();

  for (const char of characters) {
    if (groupedSpouseIds.has(char.id)) continue;

    // Connect childless spouses group node (if exists)
    const activeChildlessSpouses = char.spouses.filter(
      sId => activeIds.has(sId) && childlessSpouses.has(sId)
    );

    if (activeChildlessSpouses.length > 0) {
      const edgeKey = [char.id, `${char.id}-spouses`].sort().join('-spouse-');
      if (!spousalEdgeIds.has(edgeKey)) {
        spousalEdgeIds.add(edgeKey);
        edges.push({
          id: `spouse-${char.id}-group`,
          source: `${char.id}-spouses`,
          sourcePort: 'port-right',
          target: char.id,
          targetPort: 'port-left',
          data: {
            isSpouseConnection: true,
            spouse1Id: `${char.id}-spouses`,
            spouse2Id: char.id
          }
        });
      }
    }

    // Connect other standard spouses
    for (const spouseId of char.spouses) {
      if (!activeIds.has(spouseId)) continue;
      if (childlessSpouses.has(spouseId) || childlessSpouses.has(char.id)) continue;

      const edgeKey = [char.id, spouseId].sort().join('-spouse-');
      if (spousalEdgeIds.has(edgeKey)) continue;
      spousalEdgeIds.add(edgeKey);

      const depth1 = depthMap.get(char.id) ?? 0;
      const depth2 = depthMap.get(spouseId) ?? 0;

      let sourcePort = 'port-right';
      let targetPort = 'port-left';

      if (depth1 < depth2) {
        sourcePort = 'port-bottom';
        targetPort = 'port-top';
      } else if (depth1 > depth2) {
        sourcePort = 'port-top';
        targetPort = 'port-bottom';
      }

      edges.push({
        id: `spouse-${char.id}-${spouseId}`,
        source: char.id,
        sourcePort: sourcePort,
        target: spouseId,
        targetPort: targetPort,
        data: {
          isSpouseConnection: true,
          spouse1Id: char.id,
          spouse2Id: spouseId
        }
      });
    }
  }

  // Parent-child edges
  for (const char of characters) {
    if (groupedSpouseIds.has(char.id)) continue;

    const activeParents = char.parents.filter(pId => activeIds.has(pId));
    if (activeParents.length === 0) continue;

    // Find the mother (female parent)
    const motherId = activeParents.find(pId => characterMap.get(pId)?.gender === 'female');
    const sourceParentId = motherId || activeParents[0];

    edges.push({
      id: `child-${sourceParentId}-${char.id}`,
      source: sourceParentId,
      sourcePort: 'port-bottom',
      target: char.id,
      targetPort: 'port-top',
      data: {
        isChildConnection: true,
        parentId: sourceParentId,
        childId: char.id,
        isBastard: char.isBastard
      }
    });
  }

  return { nodes, edges };
}
