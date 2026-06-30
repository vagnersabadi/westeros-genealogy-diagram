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

  // 3. Group characters by generation
  const generations: Map<number, string[]> = new Map();
  for (const char of characters) {
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
    // Center the generation around x = 0
    let startX = -totalWidth / 2;

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

  // 5. Build nodes for ng-diagram
  const nodes: Node[] = characters.map(char => ({
    id: char.id,
    type: 'targaryen',
    position: positions.get(char.id) ?? { x: 0, y: 0 },
    size: { width: nodeWidth, height: nodeHeight },
    autoSize: false,
    data: char
  }));

  // 6. Build edges for ng-diagram
  const edges: Edge[] = [];

  // Spousal edges
  const spousalEdgeIds = new Set<string>();
  for (const char of characters) {
    for (const spouseId of char.spouses) {
      if (!activeIds.has(spouseId)) continue;
      const edgeKey = [char.id, spouseId].sort().join('-spouse-');
      if (spousalEdgeIds.has(edgeKey)) continue;
      spousalEdgeIds.add(edgeKey);

      edges.push({
        id: `spouse-${char.id}-${spouseId}`,
        source: char.id,
        sourcePort: 'port-right',
        target: spouseId,
        targetPort: 'port-left',
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
    const activeParents = char.parents.filter(pId => activeIds.has(pId));
    if (activeParents.length === 0) continue;

    // Check if parents are spouses
    const [p1, p2] = activeParents;
    if (p1 && p2 && characterMap.get(p1)?.spouses.includes(p2)) {
      // Connect child to the spousal edge rather than to individual parents,
      // or we can connect them to the father/mother or we can draw edges from each parent to the child.
      // The requirement states:
      // "Custom Links (Relationship Lines): Write the logic to change link colors dynamically based on the relationship type matching the legend:
      // * Traditional Marriage = Dark Wine Red (#4a1212)
      // * Sibling Marriage = Bright Red (#e63946)
      // * Cousin Marriage = Orange (#f4a261)
      // * Uncle/Nieces Marriage = Yellow (#ffb703)
      // * Bastard Lineage = Dashed Pink/Orange (#e85d04)
      // So let's draw direct connections from parent to child, and style parent-child edges as "Bastard Lineage" if the child is a bastard,
      // and standard/other style otherwise. Or if the child is a bastard, the parent-child line is dashed pink/orange!
      // This is clean and matches family tree standard where parents connect to children. Let's create an edge from each active parent to the child.
      for (const parentId of activeParents) {
        edges.push({
          id: `child-${parentId}-${char.id}`,
          source: parentId,
          sourcePort: 'port-bottom',
          target: char.id,
          targetPort: 'port-top',
          data: {
            isChildConnection: true,
            parentId: parentId,
            childId: char.id,
            isBastard: char.isBastard
          }
        });
      }
    } else {
      // Single parent or non-spouse parents
      for (const parentId of activeParents) {
        edges.push({
          id: `child-${parentId}-${char.id}`,
          source: parentId,
          sourcePort: 'port-bottom',
          target: char.id,
          targetPort: 'port-top',
          data: {
            isChildConnection: true,
            parentId: parentId,
            childId: char.id,
            isBastard: char.isBastard
          }
        });
      }
    }
  }

  return { nodes, edges };
}
