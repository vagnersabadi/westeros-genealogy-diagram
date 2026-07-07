import { Component, computed, input, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  NgDiagramGroupHighlightedDirective,
  NgDiagramNodeSelectedDirective,
  type NgDiagramGroupNodeTemplate,
  type GroupNode,
} from 'ng-diagram';

@Component({
  selector: 'app-group-node',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
  hostDirectives: [
    { directive: NgDiagramNodeSelectedDirective, inputs: ['node'] },
    { directive: NgDiagramGroupHighlightedDirective, inputs: ['node'] },
  ],
  templateUrl: './group-node.html',
  styleUrl: './group-node.scss',
})
export class GroupNodeComponent implements NgDiagramGroupNodeTemplate {
  node = input.required<GroupNode>();

  title = computed(() => {
    const data = this.node().data as any;
    return data?.title || 'House Blackfyre';
  });

  house = computed(() => {
    const data = this.node().data as any;
    return data?.house || 'Blackfyre';
  });
}
