import { Component, computed, signal, inject, Injector } from '@angular/core';
import {
  NgDiagramBackgroundComponent,
  NgDiagramComponent,
  NgDiagramMinimapComponent,
  NgDiagramNodeTemplateMap,
  NgDiagramEdgeTemplateMap,
  initializeModel,
  provideNgDiagram,
  NgDiagramViewportService,
  type Edge,
  type Node,
} from 'ng-diagram';
import { CHARACTERS_MOCK } from './core/mocks/characters-mock';
import { CharacterNode } from './features/diagram/components/character-node/character-node';
import { RelationshipEdge } from './features/diagram/components/relationship-edge/relationship-edge';
import { calculateLayout } from './core/utils/layout.engine';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgDiagramComponent,
    NgDiagramBackgroundComponent,
    NgDiagramMinimapComponent
  ],
  providers: [provideNgDiagram()],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private injector = inject(Injector);
  private viewportService = inject(NgDiagramViewportService);

  // Register node and edge templates
  nodeTemplateMap = new NgDiagramNodeTemplateMap([
    ['targaryen', CharacterNode],
    ['childless-spouse', CharacterNode],
    ['default', CharacterNode],
    ['selection', CharacterNode],
    ['group', CharacterNode],
    ['', CharacterNode]
  ]);

  edgeTemplateMap = new NgDiagramEdgeTemplateMap([
    ['spouse', RelationshipEdge],
    ['child', RelationshipEdge],
    ['default', RelationshipEdge],
    ['', RelationshipEdge]
  ]);

  diagramConfig = {
    nodeDraggingEnabled: false
  };

  // Selected House Family Tree Tab
  selectedHouseTree = signal<'Targaryen' | 'Stark' | 'Lannister' | 'Baratheon' | 'Greyjoy' | 'Tyrell' | 'Martell'>('Targaryen');

  // Sidebar collapsed state — starts collapsed
  sidebarOpen = signal(false);

  toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }

  // Available House Trees
  houses: Array<'Targaryen' | 'Stark' | 'Lannister' | 'Baratheon' | 'Greyjoy' | 'Tyrell' | 'Martell'> = [
    'Targaryen', 'Stark', 'Lannister', 'Baratheon', 'Greyjoy', 'Tyrell', 'Martell'
  ];

  // Dynamically filtered and laid out nodes & edges
  model = computed(() => {
    const activeTree = this.selectedHouseTree();
    
    // Show full mock data for Targaryen, and empty canvas for other houses to be implemented later
    const characters = activeTree === 'Targaryen' ? CHARACTERS_MOCK : [];

    const { nodes, edges } = calculateLayout(characters);

    // Map correct template type to edges based on their relationship type
    const typedEdges = edges.map((e: Edge) => {
      const data = e.data as any;
      return {
        ...e,
        type: data?.isSpouseConnection ? 'spouse' : 'child'
      };
    });

    return initializeModel({
      nodes,
      edges: typedEdges
    }, this.injector);
  });

  setFilter(house: any) {
    this.selectedHouseTree.set(house);
  }

  zoomIn() {
    this.viewportService.zoom(1.2);
  }

  zoomOut() {
    this.viewportService.zoom(1 / 1.2);
  }

  zoomToFit() {
    this.viewportService.zoomToFit();
  }

  resetView() {
    this.viewportService.setViewport(0, 0, 1);
  }
}
