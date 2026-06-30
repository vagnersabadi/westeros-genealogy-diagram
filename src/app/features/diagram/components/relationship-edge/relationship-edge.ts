import { Component, computed, input, inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgDiagramBaseEdgeComponent, type NgDiagramEdgeTemplate, type Edge } from 'ng-diagram';
import { Character } from '../../../../core/models/character.model';
import { CHARACTERS_MOCK } from '../../../../core/mocks/characters-mock';
import { App } from '../../../../app';

@Component({
  selector: "app-relationship-edge",
  standalone: true,
  imports: [NgDiagramBaseEdgeComponent],
  schemas: [NO_ERRORS_SCHEMA],
  template: `
    <g (click)="selectEdge($event)" style="cursor: pointer;">
      <!-- Main edge wrapper from ng-diagram library -->
      <ng-diagram-base-edge
        [edge]="edge()"
        [stroke]="isActive() ? '#c89b3c' : strokeColor()"
        [strokeDasharray]="dashArray()"
        [strokeWidth]="isActive() ? strokeWidth() + 1.5 : strokeWidth()"
      />
    </g>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class RelationshipEdge implements NgDiagramEdgeTemplate {
  edge = input.required<Edge>();
  
  private app = inject(App);

  // Find relationships from mock data
  private charMap = new Map<string, Character>(CHARACTERS_MOCK.map((c: Character) => [c.id, c]));

  toggleSelect(event: MouseEvent) {
    event.stopPropagation();
  }

  isActive = computed(() => {
    const active = this.app.selectedEdgeId();
    return active === this.edge().id;
  });

  selectEdge(event: MouseEvent) {
    event.stopPropagation();
    
    const edgeData = (this.edge().data || {}) as any;
    let description = '';
    let relationType = '';
    let participants = '';

    if (edgeData.isChildConnection) {
      const parent = this.charMap.get(edgeData.parentId);
      const child = this.charMap.get(edgeData.childId);
      relationType = edgeData.isBastard ? 'Filiação Bastarda' : 'Filiação';
      if (parent && child) {
        participants = `${parent.name} ➔ ${child.name}`;
        description = `${child.name} é filho(a) de ${parent.name}.${edgeData.isBastard ? ' Relação fora do casamento (Bastardo).' : ''}`;
      } else {
        participants = 'Filiação';
        description = 'Relação de descendência direta.';
      }
    } else if (edgeData.isSpouseConnection) {
      const s1Id = edgeData.spouse1Id;
      const s2Id = edgeData.spouse2Id;
      relationType = 'União / Casamento';

      if (s1Id && s1Id.endsWith("-spouses")) {
        relationType = 'União com múltiplas esposas';
        participants = 'Maegor I Targaryen ➔ Esposas';
        description = 'Lista de casamentos de Maegor I Targaryen.';
      } else {
        const c1 = this.charMap.get(s1Id);
        const c2 = this.charMap.get(s2Id);
        if (c1 && c2) {
          participants = `${c1.name} ⚭ ${c2.name}`;
          
          const shareParents = c1.parents.length > 0 && c2.parents.length > 0 &&
            c1.parents.some((p: string) => c2.parents.includes(p));

          if (shareParents) {
            relationType = 'Casamento Consanguíneo (Irmãos)';
            description = `Casamento incestuoso tradicional Targaryen entre os irmãos ${c1.name} e ${c2.name}.`;
          } else {
            description = `Casamento entre ${c1.name} e ${c2.name}.`;
          }
        } else {
          participants = 'Casamento';
          description = 'União matrimonial entre dois personagens.';
        }
      }
    }

    this.app.selectRelationship({
      id: this.edge().id,
      type: relationType,
      names: participants,
      desc: description
    });
  }

  // Get path description string from the edge coordinates
  pathString = computed(() => {
    const e = this.edge();
    const sx = e.sourcePosition?.x ?? 0;
    const sy = e.sourcePosition?.y ?? 0;
    const tx = e.targetPosition?.x ?? 0;
    const ty = e.targetPosition?.y ?? 0;

    const dx = Math.abs(tx - sx) * 0.5;
    const dy = Math.abs(ty - sy) * 0.5;

    // Route dynamically based on ports used
    if (e.sourcePort === "port-right" || e.sourcePort === "port-left") {
      return `M ${sx} ${sy} C ${sx + (e.sourcePort === "port-right" ? dx : -dx)} ${sy}, ${tx + (e.targetPort === "port-right" ? dx : -dx)} ${ty}, ${tx} ${ty}`;
    }
    return `M ${sx} ${sy} C ${sx} ${sy + (e.sourcePort === "port-bottom" ? dy : -dy)}, ${tx} ${ty + (e.targetPort === "port-bottom" ? dy : -dy)}, ${tx} ${ty}`;
  });

  // Calculate coordinates of the center of the line to place the label
  midPoint = computed(() => {
    const e = this.edge();
    const sx = e.sourcePosition?.x ?? 0;
    const sy = e.sourcePosition?.y ?? 0;
    const tx = e.targetPosition?.x ?? 0;
    const ty = e.targetPosition?.y ?? 0;

    return {
      x: (sx + tx) / 2,
      y: (sy + ty) / 2,
    };
  });

  // Describe relationship type based on edge data
  relationshipText = computed(() => {
    const edgeData = (this.edge().data || {}) as any;
    if (edgeData.isChildConnection) {
      return edgeData.isBastard ? "Filho/a (Bastardo)" : "Filho/a";
    }
    if (edgeData.isSpouseConnection) {
      const s1Id = edgeData.spouse1Id;
      const s2Id = edgeData.spouse2Id;

      // If it's a spouse group (childless spouses list node)
      if (s1Id && s1Id.endsWith("-spouses")) {
        return "Casamentos";
      }

      const c1 = this.charMap.get(s1Id);
      const c2 = this.charMap.get(s2Id);

      if (c1 && c2) {
        // Sibling marriage
        const shareParents =
          c1.parents.length > 0 &&
          c2.parents.length > 0 &&
          c1.parents.some((p: string) => c2.parents.includes(p));

        if (shareParents) {
          return "Cônjuge (Irmãos)";
        }

        // Uncle/Niece Marriage
        const isSibling = (idA: string, idB: string): boolean => {
          const charA = this.charMap.get(idA);
          const charB = this.charMap.get(idB);
          if (
            !charA ||
            !charB ||
            charA.parents.length === 0 ||
            charB.parents.length === 0
          )
            return false;
          return (
            charA.parents.some((p: string) => charB.parents.includes(p)) && idA !== idB
          );
        };
        const isUncleNiece =
          c2.parents.some((pId: string) => isSibling(s1Id, pId)) ||
          c1.parents.some((pId: string) => isSibling(s2Id, pId));
        if (isUncleNiece) {
          return "Cônjuge (Tio/Sobrinha)";
        }

        // Cousin Marriage
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
          return "Cônjuge (Primos)";
        }
      }
      return "Cônjuge";
    }
    return "Relação";
  });

  styleConfig = computed(() => {
    const edgeData = (this.edge().data || {}) as any;

    // 1. Child Connection
    if (edgeData.isChildConnection) {
      if (edgeData.isBastard) {
        return {
          color: "#e85d04",
          dash: "5 5",
          width: 2.5,
        };
      }
      return {
        color: edgeData.motherColor || "#473d3d",
        dash: "",
        width: 1.5,
      };
    }

    // 2. Spouse Connection (Marriage)
    if (edgeData.isSpouseConnection) {
      const s1Id = edgeData.spouse1Id;
      const s2Id = edgeData.spouse2Id;
      const c1 = this.charMap.get(s1Id);
      const c2 = this.charMap.get(s2Id);

      if (c1 && c2) {
        const shareParents =
          c1.parents.length > 0 &&
          c2.parents.length > 0 &&
          c1.parents.some((p: string) => c2.parents.includes(p));

        if (shareParents) {
          return {
            color: "#e63946",
            dash: "",
            width: 3,
          };
        }

        const isSibling = (idA: string, idB: string): boolean => {
          const charA = this.charMap.get(idA);
          const charB = this.charMap.get(idB);
          if (
            !charA ||
            !charB ||
            charA.parents.length === 0 ||
            charB.parents.length === 0
          )
            return false;
          return (
            charA.parents.some((p: string) => charB.parents.includes(p)) && idA !== idB
          );
        };

        const isUncleNiece =
          c2.parents.some((pId: string) => isSibling(s1Id, pId)) ||
          c1.parents.some((pId: string) => isSibling(s2Id, pId));

        if (isUncleNiece) {
          return {
            color: "#ffb703",
            dash: "",
            width: 3,
          };
        }

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
            color: "#f4a261",
            dash: "",
            width: 3,
          };
        }
      }

      return {
        color: "#4a1212",
        dash: "",
        width: 3,
      };
    }

    return {
      color: "#4a1212",
      dash: "",
      width: 2,
    };
  });

  strokeColor = computed(() => this.styleConfig().color);
  dashArray = computed(() => this.styleConfig().dash);
  strokeWidth = computed(() => this.styleConfig().width);
}
