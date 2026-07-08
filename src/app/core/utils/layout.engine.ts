import { Node, Edge } from 'ng-diagram';
import { Character, Spouse } from '../models/character.model';

export function calculateLayout(
  characters: Character[],
  nodeWidth = 220,
  nodeHeight = 80,
  verticalGap = 160,
  horizontalGap = 80,
  spouseGap = 40,
  layoutDir: 'horizontal' | 'vertical' = 'vertical'
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

  // Helpers to calculate space required for childless spouses
  const getChildlessSpousesHeight = (charId: string): number => {
    const char = characterMap.get(charId);
    if (!char) return 0;
    
    const activeChildless = characters.filter(s =>
      childlessSpouses.has(s.id) &&
      (char.spouses.some(sp => sp.id === s.id) || s.spouses.some(sp => sp.id === char.id))
    );
    const ghosts = ghostSpouses(char);
    const count = activeChildless.length + ghosts.length;
    return count > 0 ? count * 36 + 12 : 0; // 36px per spouse + 12px gap
  };

  const getChildlessSpousesWidth = (charId: string): number => {
    const char = characterMap.get(charId);
    if (!char) return 0;
    
    const activeChildless = characters.filter(s =>
      childlessSpouses.has(s.id) &&
      (char.spouses.some(sp => sp.id === s.id) || s.spouses.some(sp => sp.id === char.id))
    );
    const ghosts = ghostSpouses(char);
    return (activeChildless.length + ghosts.length) > 0 ? 220 : 0;
  };

  // 6. Position nodes
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

    // Sort items by average parent coordinates (Y if vertical, X if horizontal)
    items.sort((a, b) => {
      const getAvgParentCoord = (ids: string[]) => {
        let sum = 0, count = 0;
        for (const id of ids) {
          const char = characterMap.get(id)!;
          for (const pId of char.parents) {
            const pPos = positions.get(pId);
            if (pPos) {
              sum += layoutDir === 'vertical' ? pPos.y : pPos.x;
              count++;
            }
          }
        }
        return count > 0 ? sum / count : (layoutDir === 'vertical' ? 400 : 600);
      };
      return getAvgParentCoord(a.ids) - getAvgParentCoord(b.ids);
    });

    if (layoutDir === 'vertical') {
      // VERTICAL: x = generation column, y = stack within column
      const x = g * (nodeWidth + horizontalGap);
      
      const itemProfiles = items.map(item => {
        if (item.type === 'couple') {
          const [id1, id2] = item.ids;
          const h1 = getChildlessSpousesHeight(id1);
          const h2 = getChildlessSpousesHeight(id2);
          const gap = Math.max(spouseGap, h2);
          const totalHeight = h1 + nodeHeight + gap + nodeHeight;
          return {
            type: 'couple' as const,
            ids: [id1, id2],
            h1,
            gap,
            totalHeight
          };
        } else {
          const [id] = item.ids;
          const h = getChildlessSpousesHeight(id);
          const totalHeight = h + nodeHeight;
          return {
            type: 'single' as const,
            ids: [id],
            h,
            totalHeight
          };
        }
      });

      const totalHeight = itemProfiles.reduce((s, p) => s + p.totalHeight, 0) + (items.length - 1) * verticalGap;
      let startY = 400 - totalHeight / 2;

      for (const profile of itemProfiles) {
        if (profile.type === 'couple') {
          const [id1, id2] = profile.ids;
          const card1Y = startY + profile.h1;
          const card2Y = card1Y + nodeHeight + profile.gap;
          positions.set(id1, { x, y: card1Y });
          positions.set(id2, { x, y: card2Y });
          startY += profile.totalHeight + verticalGap;
        } else {
          const [id] = profile.ids;
          const cardY = startY + profile.h;
          positions.set(id, { x, y: cardY });
          startY += profile.totalHeight + verticalGap;
        }
      }
    } else {
      // HORIZONTAL: y = generation row, x = spread within row
      const y = g * verticalGap;
      
      const itemProfiles = items.map(item => {
        if (item.type === 'couple') {
          const [id1, id2] = item.ids;
          const w1 = getChildlessSpousesWidth(id1);
          const w2 = getChildlessSpousesWidth(id2);
          const gap = Math.max(spouseGap, w2);
          const totalWidth = w1 + nodeWidth + gap + nodeWidth;
          return {
            type: 'couple' as const,
            ids: [id1, id2],
            w1,
            gap,
            totalWidth
          };
        } else {
          const [id] = item.ids;
          const w = getChildlessSpousesWidth(id);
          const totalWidth = w + nodeWidth;
          return {
            type: 'single' as const,
            ids: [id],
            w,
            totalWidth
          };
        }
      });

      const totalWidth = itemProfiles.reduce((s, p) => s + p.totalWidth, 0) + (items.length - 1) * horizontalGap;
      let startX = 600 - totalWidth / 2;

      for (const profile of itemProfiles) {
        if (profile.type === 'couple') {
          const [id1, id2] = profile.ids;
          const card1X = startX + profile.w1;
          const card2X = card1X + nodeWidth + profile.gap;
          positions.set(id1, { x: card1X, y });
          positions.set(id2, { x: card2X, y });
          startX += profile.totalWidth + horizontalGap;
        } else {
          const [id] = profile.ids;
          const cardX = startX + profile.w;
          positions.set(id, { x: cardX, y });
          startX += profile.totalWidth + horizontalGap;
        }
      }
    }
  }

  // 6.5 Overlap resolution for subgroups
  const housesToGroup = ['Blackfyre'];

  for (const house of housesToGroup) {
    const houseIds = characters.filter(c => c.house?.trim().toLowerCase() === house.toLowerCase()).map(c => c.id);
    if (houseIds.length === 0) continue;

    // Calculate bounding box of these characters
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    let hasPositions = false;

    for (const id of houseIds) {
      const pos = positions.get(id);
      if (!pos) continue;
      hasPositions = true;
      const w = nodeWidth;
      const h = nodeHeight;

      if (pos.x < minX) minX = pos.x;
      if (pos.y < minY) minY = pos.y;
      if (pos.x + w > maxX) maxX = pos.x + w;
      if (pos.y + h > maxY) maxY = pos.y + h;
    }

    if (!hasPositions) continue;

    // Adjust for any spouse list nodes of characters in this house
    for (const id of houseIds) {
      const char = characterMap.get(id);
      if (char) {
        const spouseLabels = char.spouses.filter(s => !activeIds.has(s.id)); // ghost spouses
        if (spouseLabels.length > 0) {
          const spousePos = positions.get(id);
          if (spousePos) {
            const groupHeight = spouseLabels.length * 36;
            if (layoutDir === 'vertical') {
              minY = Math.min(minY, spousePos.y - groupHeight - 12);
            } else {
              minX = Math.min(minX, spousePos.x - 220);
            }
          }
        }
      }
    }

    const padding = 45;
    const headerHeight = 35;
    const margin = 80;

    const groupMinX = minX - padding;
    const groupMaxX = maxX + padding;
    const groupMinY = minY - padding - headerHeight;
    const groupMaxY = maxY + padding;

    // Resolve overlaps by shifting non-house positions
    if (layoutDir === 'horizontal') {
      // Columns are aligned by X. We shift Y (vertically).
      const nonHouseIds = Array.from(positions.keys()).filter(id => {
        const c = characterMap.get(id);
        return c?.house?.trim().toLowerCase() !== house.toLowerCase();
      });
      
      // Group non-house by their X coordinate
      const cols = new Map<number, string[]>();
      for (const id of nonHouseIds) {
        const pos = positions.get(id)!;
        if (!cols.has(pos.x)) cols.set(pos.x, []);
        cols.get(pos.x)!.push(id);
      }

      for (const [x, ids] of cols.entries()) {
        // If this column overlaps with the group X-range
        if (x >= groupMinX && x <= groupMaxX) {
          // Sort ids by Y
          ids.sort((a, b) => positions.get(a)!.y - positions.get(b)!.y);
          
          let cumulativeShift = 0;
          for (const id of ids) {
            const pos = positions.get(id)!;
            let currentY = pos.y + cumulativeShift;
            
            // If the node overlaps Y-range
            if (currentY >= groupMinY - margin && currentY <= groupMaxY + margin) {
              const newY = groupMaxY + margin;
              cumulativeShift += (newY - currentY);
              currentY = newY;
            }
            
            if (cumulativeShift > 0) {
              positions.set(id, { x: pos.x, y: currentY });
            }
          }
        }
      }
    } else {
      // VERTICAL layout: rows are aligned by Y. We shift X (horizontally).
      const nonHouseIds = Array.from(positions.keys()).filter(id => {
        const c = characterMap.get(id);
        return c?.house?.trim().toLowerCase() !== house.toLowerCase();
      });
      
      // Group non-house by their Y coordinate
      const rows = new Map<number, string[]>();
      for (const id of nonHouseIds) {
        const pos = positions.get(id)!;
        if (!rows.has(pos.y)) rows.set(pos.y, []);
        rows.get(pos.y)!.push(id);
      }

      for (const [y, ids] of rows.entries()) {
        // If this row overlaps with the group Y-range
        if (y >= groupMinY && y <= groupMaxY) {
          // Sort ids by X
          ids.sort((a, b) => positions.get(a)!.x - positions.get(b)!.x);
          
          let cumulativeShift = 0;
          for (const id of ids) {
            const pos = positions.get(id)!;
            let currentX = pos.x + cumulativeShift;
            
            // If the node overlaps X-range
            if (currentX >= groupMinX - margin && currentX <= groupMaxX + margin) {
              const newX = groupMaxX + margin;
              cumulativeShift += (newX - currentX);
              currentX = newX;
            }
            
            if (cumulativeShift > 0) {
              positions.set(id, { x: currentX, y: pos.y });
            }
          }
        }
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
            // Under vertical layout: spouse labels sit above the character card
            // Under horizontal layout: spouse labels sit on the left of the card
            x: layoutDir === 'vertical' ? spousePos.x : spousePos.x - 220,
            y: layoutDir === 'vertical' ? spousePos.y - groupHeight - 12 : spousePos.y + (nodeHeight / 2) - (groupHeight / 2)
          },
          size: layoutDir === 'vertical' ? { width: 180, height: Math.max(groupHeight, 36) } : { width: 180, height: groupHeight },
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

  // 7.5 Group other houses under group nodes dynamically
  for (const house of housesToGroup) {
    const houseNorm = house.trim();
    const houseNodes = nodes.filter(
      n => n.data && (n.data as any).house?.trim().toLowerCase() === houseNorm.toLowerCase()
    );

    if (houseNodes.length > 0) {
      const padding = 45;
      const headerHeight = 35;
      const groupId = `${houseNorm.toLowerCase().replace(/\s+/g, '-')}-group`;

      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;

      for (const n of houseNodes) {
        const x = n.position.x;
        const y = n.position.y;
        const w = n.size?.width ?? nodeWidth;
        const h = n.size?.height ?? nodeHeight;

        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x + w > maxX) maxX = x + w;
        if (y + h > maxY) maxY = y + h;
      }

      const groupNode: Node = {
        id: groupId,
        type: 'group',
        isGroup: true,
        position: {
          x: minX - padding,
          y: minY - padding - headerHeight
        },
        size: {
          width: maxX - minX + 2 * padding,
          height: maxY - minY + 2 * padding + headerHeight
        },
        autoSize: false,
        data: {
          id: groupId,
          title: `House ${houseNorm}`,
          house: houseNorm
        } as any
      };

      // Assign groupId to children
      for (const n of houseNodes) {
        (n as any).groupId = groupId;
      }

      // Insert group node at the beginning of the nodes array so it renders behind the child nodes
      nodes.unshift(groupNode);
    }
  }

  // 8. Build edges
  const edges: Edge[] = [];
  const spousalEdgeIds = new Set<string>();

  for (const char of characters) {
    if (groupedSpouseIds.has(char.id)) continue;

    // Edge from spouse-label group to this character
    const hasSpouseGroup = nodes.some(n => n.id === `${char.id}-spouses`);
    if (hasSpouseGroup) {
      const spouseLabels: Spouse[] = [
        ...char.spouses
          .filter(s => activeIds.has(s.id) && childlessSpouses.has(s.id))
          .map(s => ({ id: s.id, nome: s.nome, corTexto: s.corTexto })),
        ...ghostSpouses(char).map(s => ({ id: s.id, nome: s.nome, corTexto: s.corTexto }))
      ];

      const edgeKey = `${char.id}-spousegroup`;
      if (!spousalEdgeIds.has(edgeKey)) {
        spousalEdgeIds.add(edgeKey);
        edges.push({
          id: `spouse-${char.id}-group`,
          source: `${char.id}-spouses`,
          sourcePort: layoutDir === 'vertical' ? 'port-bottom' : 'port-right',
          target: char.id,
          targetPort: layoutDir === 'vertical' ? 'port-top' : 'port-left',
          data: {
            isSpouseConnection: true,
            spouse1Id: `${char.id}-spouses`,
            spouse2Id: char.id,
            spouseCount: spouseLabels.length,
            spouseLabels
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
      // In horizontal layout couples are side-by-side → use port-right ↔ port-left
      const depth1 = depthMap.get(char.id) ?? 0;
      const depth2 = depthMap.get(s.id) ?? 0;
      let sourcePort = 'port-right';
      let targetPort = 'port-left';

      if (layoutDir === 'vertical') {
        sourcePort = depth1 === depth2 ? 'port-bottom' : 'port-right';
        targetPort = depth1 === depth2 ? 'port-top'   : 'port-left';
      } else {
        if (depth1 < depth2) { sourcePort = 'port-bottom'; targetPort = 'port-top'; }
        else if (depth1 > depth2) { sourcePort = 'port-top'; targetPort = 'port-bottom'; }
      }

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
      sourcePort: layoutDir === 'vertical' ? 'port-right' : 'port-bottom',
      target: char.id,
      targetPort: layoutDir === 'vertical' ? 'port-left' : 'port-top',
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
