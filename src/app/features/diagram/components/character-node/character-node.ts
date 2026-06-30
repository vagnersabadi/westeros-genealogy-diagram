import { Component, computed, input } from '@angular/core';
import {
  NgDiagramNodeSelectedDirective,
  NgDiagramPortComponent,
  type NgDiagramNodeTemplate,
  type Node,
} from 'ng-diagram';
import type { Character, Spouse } from '../../../../core/models/character.model';

@Component({
  selector: 'app-character-node',
  standalone: true,
  imports: [NgDiagramPortComponent],
  hostDirectives: [
    { directive: NgDiagramNodeSelectedDirective, inputs: ['node'] },
  ],
  templateUrl: './character-node.html',
  styleUrl: './character-node.scss',
})
export class CharacterNode implements NgDiagramNodeTemplate {
  node = input.required<Node>();

  character = computed(() => this.node().data as Character);
  spousesList = computed(() => {
    const data = this.node().data as any;
    return (data?.spousesList || []) as Spouse[];
  });
}
