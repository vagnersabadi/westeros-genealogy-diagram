import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CharacterService } from './character.service';
import { Character } from '../models/character.model';

describe('CharacterService', () => {
  let service: CharacterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterService]
    });
    service = TestBed.inject(CharacterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  it('deve carregar dados do JSON na inicialização', (done) => {
    service.getAllCharacters().subscribe((characters: Character[]) => {
      expect(characters.length).toBeGreaterThan(0);
      done();
    });

    const req = httpMock.expectOne('assets/data/targaryen-family.json');
    expect(req.request.method).toBe('GET');
    req.flush({
      'Geração 1': [
        {
          id: 'aegon-i',
          name: 'Aegon I Targaryen',
          title: 'The Conqueror',
          house: 'Targaryen',
          gender: 'male',
          imageUrl: "avatar('Aegon I', '1a0e0e')",
          isBastard: false,
          isKingOrQueen: true,
          parents: [],
          spouses: []
        }
      ]
    });
  });

  it('deve retornar personagem por ID', (done) => {
    service.getCharacterById('aegon-i').subscribe((character: Character | undefined) => {
      expect(character).toBeDefined();
      expect(character?.name).toBe('Aegon I Targaryen');
      done();
    });

    const req = httpMock.expectOne('assets/data/targaryen-family.json');
    req.flush({
      'Geração 1': [
        {
          id: 'aegon-i',
          name: 'Aegon I Targaryen',
          title: 'The Conqueror',
          house: 'Targaryen',
          gender: 'male',
          imageUrl: "avatar('Aegon I', '1a0e0e')",
          isBastard: false,
          isKingOrQueen: true,
          parents: [],
          spouses: []
        }
      ]
    });
  });

  it('deve retornar personagens por geração', (done) => {
    service.getCharactersByGeneration('Geração 1').subscribe((characters: Character[]) => {
      expect(characters.length).toBe(1);
      expect(characters[0].id).toBe('aegon-i');
      done();
    });

    const req = httpMock.expectOne('assets/data/targaryen-family.json');
    req.flush({
      'Geração 1': [
        {
          id: 'aegon-i',
          name: 'Aegon I Targaryen',
          title: 'The Conqueror',
          house: 'Targaryen',
          gender: 'male',
          imageUrl: "avatar('Aegon I', '1a0e0e')",
          isBastard: false,
          isKingOrQueen: true,
          parents: [],
          spouses: []
        }
      ]
    });
  });

  it('deve retornar personagens por casa', (done) => {
    service.getCharactersByHouse('Targaryen').subscribe((characters: Character[]) => {
      expect(characters.length).toBeGreaterThan(0);
      expect(characters.every(c => c.house === 'Targaryen')).toBeTruthy();
      done();
    });

    const req = httpMock.expectOne('assets/data/targaryen-family.json');
    req.flush({
      'Geração 1': [
        {
          id: 'aegon-i',
          name: 'Aegon I Targaryen',
          title: 'The Conqueror',
          house: 'Targaryen',
          gender: 'male',
          imageUrl: "avatar('Aegon I', '1a0e0e')",
          isBastard: false,
          isKingOrQueen: true,
          parents: [],
          spouses: []
        }
      ]
    });
  });

  it('deve retornar apenas reis e rainhas', (done) => {
    service.getKingsAndQueens().subscribe((characters: Character[]) => {
      expect(characters.every(c => c.isKingOrQueen)).toBeTruthy();
      done();
    });

    const req = httpMock.expectOne('assets/data/targaryen-family.json');
    req.flush({
      'Geração 1': [
        {
          id: 'aegon-i',
          name: 'Aegon I Targaryen',
          title: 'The Conqueror',
          house: 'Targaryen',
          gender: 'male',
          imageUrl: "avatar('Aegon I', '1a0e0e')",
          isBastard: false,
          isKingOrQueen: true,
          parents: [],
          spouses: []
        }
      ]
    });
  });

  it('deve processar imageUrl corretamente', (done) => {
    service.getAllCharacters().subscribe((characters: Character[]) => {
      const character = characters[0];
      // Verificar se a URL foi processada (não contém mais avatar())
      expect(character.imageUrl).not.toContain('avatar(');
      done();
    });

    const req = httpMock.expectOne('assets/data/targaryen-family.json');
    req.flush({
      'Geração 1': [
        {
          id: 'aegon-i',
          name: 'Aegon I Targaryen',
          title: 'The Conqueror',
          house: 'Targaryen',
          gender: 'male',
          imageUrl: "avatar('Aegon I', '1a0e0e')",
          isBastard: false,
          isKingOrQueen: true,
          parents: [],
          spouses: []
        }
      ]
    });
  });

  it('deve retornar lista de gerações disponíveis', (done) => {
    service.getAllCharacters().subscribe(() => {
      const generations = service.getAvailableGenerations();
      expect(generations.length).toBeGreaterThan(0);
      expect(generations).toContain('Geração 1');
      done();
    });

    const req = httpMock.expectOne('assets/data/targaryen-family.json');
    req.flush({
      'Geração 1': [
        {
          id: 'aegon-i',
          name: 'Aegon I Targaryen',
          title: 'The Conqueror',
          house: 'Targaryen',
          gender: 'male',
          imageUrl: "avatar('Aegon I', '1a0e0e')",
          isBastard: false,
          isKingOrQueen: true,
          parents: [],
          spouses: []
        }
      ]
    });
  });
});
