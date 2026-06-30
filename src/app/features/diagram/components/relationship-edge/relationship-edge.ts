import { Component, computed, input } from '@angular/core';
import { NgDiagramBaseEdgeComponent, type NgDiagramEdgeTemplate, type Edge } from 'ng-diagram';
import { CHARACTERS_MOCK } from '../../../../core/mocks/characters-mock';

@Component({
  selector: 'app-relationship-edge',
  standalone: true,
  imports: [NgDiagramBaseEdgeComponent],
  template: `
    <ng-diagram-base-edge
      [edge]="edge()"
      [stroke]="strokeColor()"
      [strokeDasharray]="dashArray()"
      [strokeWidth]="strokeWidth()"
    />
  `,
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class RelationshipEdge implements NgDiagramEdgeTemplate {
  edge = input.required<Edge>();

  // Find relationships from mock data
  private charMap = new Map(CHARACTERS_MOCK.map(c => [c.id, c]));

  styleConfig = computed(() => {
    const edgeData = (this.edge().data || {}) as any;

    // 1. Child Connection
    if (edgeData.isChildConnection) {
      if (edgeData.isBastard) {
        return {
          color: '#e85d04', // Dashed Orange for bastard lineage
          dash: '5 5',
          width: 2.5
        };
      }
      // Use the per-mother color if provided, otherwise fallback to dark muted line
      return {
        color: edgeData.motherColor || '#473d3d',
        dash: '',
        width: 1.5
      };
    }

    // 2. Spouse Connection (Marriage)
    if (edgeData.isSpouseConnection) {
      const s1Id = edgeData.spouse1Id;
      const s2Id = edgeData.spouse2Id;
      const c1 = this.charMap.get(s1Id);
      const c2 = this.charMap.get(s2Id);

      if (c1 && c2) {
        // A. Sibling Marriage
        // Do they share at least one parent?
        const shareParents = c1.parents.length > 0 && c2.parents.length > 0 &&
          c1.parents.some(p => c2.parents.includes(p));

        if (shareParents) {
          return {
            color: '#e63946', // Bright Red
            dash: '',
            width: 3
          };
        }

        // B. Uncle/Niece Marriage
        // Is c1 a sibling of c2's parents, or vice-versa?
        const isSibling = (idA: string, idB: string): boolean => {
          const charA = this.charMap.get(idA);
          const charB = this.charMap.get(idB);
          if (!charA || !charB || charA.parents.length === 0 || charB.parents.length === 0) return false;
          return charA.parents.some(p => charB.parents.includes(p)) && idA !== idB;
        };

        const isUncleNiece = c2.parents.some(pId => isSibling(s1Id, pId)) ||
                             c1.parents.some(pId => isSibling(s2Id, pId));

        if (isUncleNiece) {
          return {
            color: '#ffb703', // Yellow
            dash: '',
            width: 3
          };
        }

        // C. Cousin Marriage
        // Do their parents share a parent? (Sharing a grandparent)
        let shareGrandparents = false;
        for (const p1 of c1.parents) {
          for (const p2 of c2.parents) {
            if (isSibling(p1, p2)) {
              shareGrandparents = true;
              break;
            }
          }
          if (shareGrandparents) break;
        }

        if (shareGrandparents) {
          return {
            color: '#f4a261', // Orange
            dash: '',
            width: 3
          };
        }
      }

      // D. Traditional Marriage (Default)
      return {
        color: '#4a1212', // Dark Wine Red
        dash: '',
        width: 3
      };
    }

    // Default fallback
    return {
      color: '#4a1212',
      dash: '',
      width: 2
    };
  });

  strokeColor = computed(() => this.styleConfig().color);
  dashArray = computed(() => this.styleConfig().dash);
  strokeWidth = computed(() => this.styleConfig().width);
}
