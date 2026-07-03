import { Component, computed, input, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  NgDiagramNodeSelectedDirective,
  NgDiagramPortComponent,
  type NgDiagramNodeTemplate,
  type Node,
} from 'ng-diagram';
import { CharacterService } from '../../../../core/services/character.service';
import type { Character, Spouse } from '../../../../core/models/character.model';

@Component({
  selector: 'app-character-node',
  standalone: true,
  imports: [NgDiagramPortComponent, NgClass],
  hostDirectives: [
    { directive: NgDiagramNodeSelectedDirective, inputs: ['node'] },
  ],
  templateUrl: './character-node.html',
  styleUrl: './character-node.scss',
})
export class CharacterNode implements NgDiagramNodeTemplate {
  private characterService = inject(CharacterService);

  node = input.required<Node>();

  character = computed(() => this.node().data as Character);
  spousesList = computed(() => {
    const data = this.node().data as any;
    return (data?.spousesList || []) as Spouse[];
  });

  openCharacter(): void {
    const character = this.character();

    if (!character || this.spousesList().length > 0 || character.isChildlessSpouse) {
      return;
    }

    this.characterService.selectCharacter(character);
  }
}
