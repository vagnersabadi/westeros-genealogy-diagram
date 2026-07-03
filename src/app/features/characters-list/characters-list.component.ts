import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Character } from '../../core/models/character.model';
import { CharacterService } from '../../core/services/character.service';

/**
 * Exemplo de componente que usa o novo CharacterService
 * Este é um template para mostrar como migrar componentes existentes
 */
@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="characters-container">
      <h1>Árvore Genealógica Targaryen</h1>

      <!-- Botões para filtrar -->
      <div class="filters">
        <button (click)="loadAllCharacters()">Todos</button>
        <button (click)="loadKingsAndQueens()">Reis/Rainhas</button>
        <button *ngFor="let gen of generations" (click)="loadGeneration(gen)">
          {{ gen }}
        </button>
      </div>

      <!-- Lista de personagens -->
      <div class="characters-list">
        <div
          *ngFor="let character of characters$ | async"
          class="character-card"
        >
          <img [src]="character.imageUrl" [alt]="character.name" />
          <h3>{{ character.name }}</h3>
          <p class="title">{{ character.title }}</p>
          <p class="house">Casa: {{ character.house }}</p>
          <p *ngIf="character.isKingOrQueen" class="royalty">👑 Rei/Rainha</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .characters-container {
        padding: 20px;
      }

      .filters {
        margin: 20px 0;
      }

      .filters button {
        margin-right: 10px;
        padding: 8px 16px;
        background-color: #c89b3c;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .filters button:hover {
        background-color: #a67a2d;
      }

      .characters-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }

      .character-card {
        border: 2px solid #c89b3c;
        border-radius: 8px;
        padding: 15px;
        text-align: center;
        background-color: #f5f5f5;
        transition: transform 0.3s ease;
      }

      .character-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .character-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 10px;
      }

      .character-card h3 {
        margin: 10px 0 5px 0;
        color: #1a0e0e;
      }

      .character-card .title {
        color: #666;
        font-size: 0.9em;
        margin: 5px 0;
      }

      .character-card .house {
        font-weight: bold;
        color: #c89b3c;
      }

      .character-card .royalty {
        color: #d4a0a0;
        font-weight: bold;
      }
    `
  ]
})
export class CharactersListComponent implements OnInit {
  characters$: Observable<Character[]>;
  generations: string[] = [];

  constructor(private characterService: CharacterService) {
    this.characters$ = this.characterService.getAllCharacters();
  }

  ngOnInit(): void {
    this.generations = this.characterService.getAvailableGenerations();
  }

  loadAllCharacters(): void {
    this.characters$ = this.characterService.getAllCharacters();
  }

  loadKingsAndQueens(): void {
    this.characters$ = this.characterService.getKingsAndQueens();
  }

  loadGeneration(generation: string): void {
    this.characters$ = this.characterService.getCharactersByGeneration(
      generation
    );
  }
}
