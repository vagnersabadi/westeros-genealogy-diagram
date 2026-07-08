import { Component, computed, signal, inject, Injector, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
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
import { CharacterService } from './core/services/character.service';
import { Character } from './core/models/character.model';
import { CharacterNode } from './features/diagram/components/character-node/character-node';
import { GroupNodeComponent } from './features/diagram/components/group-node/group-node';
import { RelationshipEdge } from './features/diagram/components/relationship-edge/relationship-edge';
import { calculateLayout } from './core/utils/layout.engine';
import { CharactersListComponent } from './features/characters-list/characters-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgDiagramComponent,
    NgDiagramBackgroundComponent,
    NgDiagramMinimapComponent,
    NgClass,
    CharactersListComponent
  ],
  providers: [provideNgDiagram()],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private injector = inject(Injector);
  private viewportService = inject(NgDiagramViewportService);
  private characterService = inject(CharacterService);

  // Characters loaded via toSignal — no manual subscription needed
  characters = toSignal(this.characterService.getAllCharacters(), { initialValue: [] as Character[] });

  // Expose service signals needed by the template
  selectedCharacter = this.characterService.selectedCharacter;
  selectedImageIndex = this.characterService.selectedImageIndex;

  selectedCharacterImages = computed(() => {
    const character = this.selectedCharacter();

    if (!character) {
      return [];
    }

    const extraImages = character.imagesList?.length
      ? character.imagesList
      : character.galleryUrls ?? [];

    return [character.imageUrl, ...extraImages].filter(Boolean);
  });

  spousesWithoutChildren = computed(() => {
    const character = this.selectedCharacter();
    const allChars = this.characters();
    if (!character) return [];

    const children = allChars.filter(c => c.parents?.includes(character.id));
    const spousesWithChildrenIds = new Set<string>();
    for (const child of children) {
      const otherParent = child.parents?.find(pId => pId !== character.id);
      if (otherParent) {
        spousesWithChildrenIds.add(otherParent);
      }
    }

    return character.spouses?.filter(spouse => !spousesWithChildrenIds.has(spouse.id)) ?? [];
  });

  constructor() {}

  // Register node and edge templates
  nodeTemplateMap = new NgDiagramNodeTemplateMap([
    ['targaryen', CharacterNode],
    ['childless-spouse', CharacterNode],
    ['default', CharacterNode],
    ['selection', CharacterNode],
    ['group', GroupNodeComponent],
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

  // Layout direction state — default is vertical
  layoutDirection = signal<'horizontal' | 'vertical'>('vertical');

  // View mode — 'tree' shows the diagram, 'list' shows the characters list
  viewMode = signal<'tree' | 'list'>('tree');

  setViewMode(mode: 'tree' | 'list') {
    this.viewMode.set(mode);
  }

  // Selected relationship details for global popup
  selectedEdgeId = signal<string | null>(null);
  selectedRelationship = signal<{ id: string; type: string; names: string; desc: string } | null>(null);

  toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }

  toggleLayout() {
    this.layoutDirection.update(d => d === 'vertical' ? 'horizontal' : 'vertical');
  }

  selectRelationship(rel: { id: string; type: string; names: string; desc: string } | null) {
    if (!rel || this.selectedEdgeId() === rel.id) {
      this.clearRelationship();
    } else {
      this.selectedEdgeId.set(rel.id);
      this.selectedRelationship.set(rel);
    }
  }

  clearRelationship() {
    this.selectedEdgeId.set(null);
    this.selectedRelationship.set(null);
  }

  closeCharacter() {
    this.characterService.clearSelectedCharacter();
  }

  nextCharacterImage() {
    this.characterService.nextGalleryImage(this.selectedCharacterImages().length);
  }

  previousCharacterImage() {
    this.characterService.previousGalleryImage(this.selectedCharacterImages().length);
  }

  // Available House Trees
  houses: Array<'Targaryen' | 'Stark' | 'Lannister' | 'Baratheon' | 'Greyjoy' | 'Tyrell' | 'Martell'> = [
    'Targaryen', 'Stark', 'Lannister', 'Baratheon', 'Greyjoy', 'Tyrell', 'Martell'
  ];

  // Dynamically filtered and laid out nodes & edges
  model = computed(() => {
    const activeTree = this.selectedHouseTree();
    const currentLayout = this.layoutDirection();
    
    // Show full data for Targaryen, and empty canvas for other houses to be implemented later
    const characters = activeTree === 'Targaryen' ? this.characters() : [];

    const { nodes, edges } = calculateLayout(
      characters,
      290,
      98,
      160,
      80,
      40,
      currentLayout
    );

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
