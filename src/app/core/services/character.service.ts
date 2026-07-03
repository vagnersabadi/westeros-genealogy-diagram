import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Character } from '../models/character.model';

interface CharacterDTO {
  id: string;
  name: string;
  title: string;
  house: string;
  gender: Character['gender'];
  imageUrl: string;
  imagesList?: string[];
  wikiUrl?: string;
  galleryUrls?: string[];
  isBastard: boolean;
  isKingOrQueen: boolean;
  parents: string[];
  spouses: Array<{ id: string; nome: string; corTexto: string }>;
}

interface GenerationsData {
  [key: string]: CharacterDTO[];
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private charactersSubject = new BehaviorSubject<Character[]>([]);
  public characters$ = this.charactersSubject.asObservable();
  public selectedCharacter = signal<Character | null>(null);
  public selectedImageIndex = signal(0);

  private generationsData: GenerationsData | null = null;

  constructor(private http: HttpClient) {
    this.loadCharactersFromJSON();
  }

  /**
   * Carrega os dados dos personagens do arquivo JSON
   */
  private loadCharactersFromJSON(): void {
    this.http
      .get<GenerationsData>('assets/data/targaryen-family.json')
      .pipe(
        map((data) => this.processGenerations(data)),
        tap((characters) => this.charactersSubject.next(characters)),
        catchError((error) => {
          console.error('Erro ao carregar dados dos personagens:', error);
          return of([]);
        })
      )
      .subscribe();
  }

  /**
   * Processa as gerações do JSON e retorna um array de Character
   */
  private processGenerations(data: GenerationsData): Character[] {
    const allCharacters: Character[] = [];

    Object.keys(data).forEach((generation) => {
      const generationCharacters = data[generation];
      const characters = generationCharacters.map((dto) =>
        this.convertDTOToCharacter(dto)
      );
      allCharacters.push(...characters);
    });

    this.generationsData = data;
    return allCharacters;
  }

  /**
   * Converte DTO do JSON para Character com imageUrl processada
   */
  private convertDTOToCharacter(dto: CharacterDTO): Character {
    return {
      ...dto,
      imageUrl: this.processImageUrl(dto.imageUrl),
      imagesList: dto.imagesList?.map((url) => this.processImageUrl(url)),
      galleryUrls: dto.galleryUrls?.map((url) => this.processImageUrl(url)),
      spouses: dto.spouses || []
    };
  }

  /**
   * Processa a imageUrl, substituindo a chamada de função avatar() pela função real
   */
  private processImageUrl(imageUrl: string): string {
    if (imageUrl.includes('avatar(')) {
      // Extrai os parâmetros da função avatar
      const match = imageUrl.match(/avatar\('([^']+)',\s*'([^']+)'\)/);
      if (match) {
        const [, name, color] = match;
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${encodeURIComponent(color)}&color=fff&size=128`;
      }
    }
    return imageUrl;
  }

  /**
   * Retorna todos os personagens
   */
  getAllCharacters(): Observable<Character[]> {
    return this.characters$;
  }

  /**
   * Retorna um personagem específico pelo ID
   */
  getCharacterById(id: string): Observable<Character | undefined> {
    return this.characters$.pipe(
      map((characters) =>
        characters.find((character) => character.id === id)
      )
    );
  }

  /**
   * Retorna todos os personagens de uma geração
   */
  getCharactersByGeneration(generation: string): Observable<Character[]> {
    if (!this.generationsData) {
      return of([]);
    }

    const generationCharacters = this.generationsData[generation] || [];
    return of(
      generationCharacters.map((dto) => this.convertDTOToCharacter(dto))
    );
  }

  /**
   * Retorna uma lista de todas as gerações disponíveis
   */
  getAvailableGenerations(): string[] {
    return this.generationsData ? Object.keys(this.generationsData) : [];
  }

  /**
   * Retorna personagens de uma casa específica
   */
  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.characters$.pipe(
      map((characters) =>
        characters.filter(
          (character) =>
            character.house.toLowerCase() === house.toLowerCase()
        )
      )
    );
  }

  /**
   * Retorna apenas os reis/rainhas
   */
  getKingsAndQueens(): Observable<Character[]> {
    return this.characters$.pipe(
      map((characters) =>
        characters.filter((character) => character.isKingOrQueen)
      )
    );
  }

  selectCharacter(character: Character): void {
    this.selectedCharacter.set(character);
    this.selectedImageIndex.set(0);
  }

  clearSelectedCharacter(): void {
    this.selectedCharacter.set(null);
    this.selectedImageIndex.set(0);
  }

  nextGalleryImage(totalImages: number): void {
    if (totalImages <= 1) {
      return;
    }

    this.selectedImageIndex.update((currentIndex) => (currentIndex + 1) % totalImages);
  }

  previousGalleryImage(totalImages: number): void {
    if (totalImages <= 1) {
      return;
    }

    this.selectedImageIndex.update((currentIndex) =>
      (currentIndex - 1 + totalImages) % totalImages
    );
  }
}
