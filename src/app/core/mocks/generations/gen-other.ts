import { Character } from "../../models/character.model";
import { avatar } from "./avatar";

export const GEN_OTHER: Character[] = [
  // Generation 5
  {
    id: 'viserys-i',
    name: 'Viserys I Targaryen',
    title: 'King of the Andals',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Viserys I', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['baelon', 'alyssa-t'],
    spouses: ['aemma-arryn']
  },
  {
    id: 'aemma-arryn',
    name: 'Aemma Arryn',
    title: 'Queen Consort',
    house: 'Arryn',
    gender: 'female',
    imageUrl: avatar('Aemma A', '1d263b'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['viserys-i']
  },
  {
    id: 'daemon',
    name: 'Daemon Targaryen',
    title: 'The Rogue Prince',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Daemon', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: false,
    parents: ['baelon', 'alyssa-t'],
    spouses: ['rhaenyra']
  },

  // Generation 6
  {
    id: 'rhaenyra',
    name: 'Rhaenyra Targaryen',
    title: 'The Realm\'s Delight',
    house: 'Targaryen',
    gender: 'female',
    imageUrl: avatar('Rhaenyra', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['viserys-i', 'aemma-arryn'],
    spouses: ['daemon']
  },

  // Generation 7
  {
    id: 'viserys-ii',
    name: 'Viserys II Targaryen',
    title: 'King of the Andals',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Viserys II', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['daemon', 'rhaenyra'],
    spouses: ['larra-rogare']
  },
  {
    id: 'larra-rogare',
    name: 'Larra Rogare',
    title: 'Noblewoman of Lys',
    house: 'Rogare',
    gender: 'female',
    imageUrl: avatar('Larra R', '201c24'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['viserys-ii']
  },

  // Generation 8
  {
    id: 'aegon-iv',
    name: 'Aegon IV Targaryen',
    title: 'The Unworthy',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Aegon IV', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['viserys-ii', 'larra-rogare'],
    spouses: ['naerys']
  },
  {
    id: 'naerys',
    name: 'Naerys Targaryen',
    title: 'Queen Consort',
    house: 'Targaryen',
    gender: 'female',
    imageUrl: avatar('Naerys', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['viserys-ii', 'larra-rogare'],
    spouses: ['aegon-iv']
  },

  // Generation 9
  {
    id: 'daeron-ii',
    name: 'Daeron II Targaryen',
    title: 'The Good',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Daeron II', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['aegon-iv', 'naerys'],
    spouses: ['myriah-martell']
  },
  {
    id: 'myriah-martell',
    name: 'Myriah Martell',
    title: 'Queen Consort',
    house: 'Martell',
    gender: 'female',
    imageUrl: avatar('Myriah M', '2b1a0e'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['daeron-ii']
  },

  // Generation 10
  {
    id: 'maekar-i',
    name: 'Maekar I Targaryen',
    title: 'The Anvil',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Maekar I', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['daeron-ii', 'myriah-martell'],
    spouses: ['dyanna-dayne']
  },
  {
    id: 'dyanna-dayne',
    name: 'Dyanna Dayne',
    title: 'Princess of Dorne',
    house: 'Dayne',
    gender: 'female',
    imageUrl: avatar('Dyanna D', '1e132b'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['maekar-i']
  },

  // Generation 11
  {
    id: 'aegon-v',
    name: 'Aegon V Targaryen',
    title: 'The Unlikely',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Aegon V', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['maekar-i', 'dyanna-dayne'],
    spouses: ['betha-blackwood']
  },
  {
    id: 'betha-blackwood',
    name: 'Betha Blackwood',
    title: 'Black Betha',
    house: 'Blackwood',
    gender: 'female',
    imageUrl: avatar('Betha B', '121b12'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['aegon-v']
  },

  // Generation 12
  {
    id: 'jaehaerys-ii',
    name: 'Jaehaerys II Targaryen',
    title: 'King of the Andals',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Jaehaerys II', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['aegon-v', 'betha-blackwood'],
    spouses: ['shaera']
  },
  {
    id: 'shaera',
    name: 'Shaera Targaryen',
    title: 'Queen Consort',
    house: 'Targaryen',
    gender: 'female',
    imageUrl: avatar('Shaera', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['aegon-v', 'betha-blackwood'],
    spouses: ['jaehaerys-ii']
  },

  // Generation 13
  {
    id: 'aerys-ii',
    name: 'Aerys II Targaryen',
    title: 'The Mad King',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Aerys II', '2d0b0b'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['jaehaerys-ii', 'shaera'],
    spouses: ['rhaella-gen13'] // renamed to avoid clash with Gen 4 rhaella
  },
  {
    id: 'rhaella-gen13',
    name: 'Rhaella Targaryen',
    title: 'Queen Consort',
    house: 'Targaryen',
    gender: 'female',
    imageUrl: avatar('Rhaella', '2d0b0b'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['jaehaerys-ii', 'shaera'],
    spouses: ['aerys-ii']
  },

  // Generation 14
  {
    id: 'rhaegar',
    name: 'Rhaegar Targaryen',
    title: 'Prince of Dragonstone',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Rhaegar', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: false,
    parents: ['aerys-ii', 'rhaella-gen13'],
    spouses: ['elia-martell', 'lyanna-stark']
  },
  {
    id: 'elia-martell',
    name: 'Elia Martell',
    title: 'Princess of Dorne',
    house: 'Martell',
    gender: 'female',
    imageUrl: avatar('Elia M', '2b1a0e'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['rhaegar']
  },
  {
    id: 'lyanna-stark',
    name: 'Lyanna Stark',
    title: 'Lady of Winterfell',
    house: 'Stark',
    gender: 'female',
    imageUrl: avatar('Lyanna S', '1e242a'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['rhaegar']
  },

  // Generation 15
  {
    id: 'jon-snow',
    name: 'Jon Snow',
    title: 'King in the North (Aegon Targaryen)',
    house: 'Stark',
    gender: 'male',
    imageUrl: avatar('Jon Snow', '1c1f22'),
    isBastard: true,
    isKingOrQueen: false,
    parents: ['rhaegar', 'lyanna-stark'],
    spouses: []
  },
  {
    id: 'robert-baratheon',
    name: 'Robert Baratheon',
    title: 'King of the Andals',
    house: 'Baratheon',
    gender: 'male',
    imageUrl: avatar('Robert B', '2a240f'),
    isBastard: false,
    isKingOrQueen: true,
    parents: [],
    spouses: ['cersei-lannister']
  },
  {
    id: 'cersei-lannister',
    name: 'Cersei Lannister',
    title: 'Queen Regent',
    house: 'Lannister',
    gender: 'female',
    imageUrl: avatar('Cersei L', '2a1313'),
    isBastard: false,
    isKingOrQueen: true,
    parents: [],
    spouses: ['robert-baratheon']
  },
  {
    id: 'joffrey-baratheon',
    name: 'Joffrey Baratheon',
    title: 'King of the Andals',
    house: 'Baratheon',
    gender: 'male',
    imageUrl: avatar('Joffrey B', '2a240f'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['robert-baratheon', 'cersei-lannister'],
    spouses: []
  },
  {
    id: 'myrcella-baratheon',
    name: 'Myrcella Baratheon',
    title: 'Princess',
    house: 'Baratheon',
    gender: 'female',
    imageUrl: avatar('Myrcella B', '2a240f'),
    isBastard: false,
    isKingOrQueen: false,
    parents: ['robert-baratheon', 'cersei-lannister'],
    spouses: []
  },
  {
    id: 'tommen-baratheon',
    name: 'Tommen Baratheon',
    title: 'King of the Andals',
    house: 'Baratheon',
    gender: 'male',
    imageUrl: avatar('Tommen B', '2a240f'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['robert-baratheon', 'cersei-lannister'],
    spouses: []
  }
];
