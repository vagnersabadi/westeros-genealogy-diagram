import { Character } from '../models/character.model';

const avatar = (name: string, bg: string, color: string = 'f1e6d0') =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=${color}&size=160&font-size=0.35&bold=true`;

export const CHARACTERS_MOCK: Character[] = [
  // Generation 1
  {
    id: 'aegon-i',
    name: 'Aegon I Targaryen',
    title: 'The Conqueror',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Aegon I', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: [],
    spouses: ['visenya', 'rhaenys']
  },
  {
    id: 'visenya',
    name: 'Visenya Targaryen',
    title: 'Queen Consort',
    house: 'Targaryen',
    gender: 'female',
    imageUrl: avatar('Visenya', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: [],
    spouses: ['aegon-i']
  },
  {
    id: 'rhaenys',
    name: 'Rhaenys Targaryen',
    title: 'Queen Consort',
    house: 'Targaryen',
    gender: 'female',
    imageUrl: avatar('Rhaenys', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: [],
    spouses: ['aegon-i']
  },
  
  // Generation 2
  {
    id: 'aenys-i',
    name: 'Aenys I Targaryen',
    title: 'King of the Andals',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Aenys I', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['rhaenys'],
    spouses: ['alyssa-velaryon']
  },
  {
    id: 'maegor-i',
    name: 'Maegor I Targaryen',
    title: 'The Cruel',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Maegor I', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['visenya'],
    spouses: ['ceryse-hightower', 'alys-harroway', 'tyanna-towers', 'elinor-costayne', 'jeyne-westerling']
  },
  {
    id: 'ceryse-hightower',
    name: 'Ceryse Hightower',
    title: 'Queen Consort',
    house: 'Hightower',
    gender: 'female',
    imageUrl: avatar('Ceryse H', '143d1f'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['maegor-i']
  },
  {
    id: 'alys-harroway',
    name: 'Alys Harroway',
    title: 'Queen Consort',
    house: 'Harroway',
    gender: 'female',
    imageUrl: avatar('Alys H', '2a2a2a'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['maegor-i']
  },
  {
    id: 'tyanna-towers',
    name: 'Tyanna of the Towers',
    title: 'Queen Consort',
    house: 'Towers',
    gender: 'female',
    imageUrl: avatar('Tyanna T', '321a42'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['maegor-i']
  },
  {
    id: 'elinor-costayne',
    name: 'Elinor Costayne',
    title: 'Queen Consort *',
    house: 'Costayne',
    gender: 'female',
    imageUrl: avatar('Elinor C', '1d2e3d'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['maegor-i']
  },
  {
    id: 'jeyne-westerling',
    name: 'Jeyne Westerling',
    title: 'Queen Consort *',
    house: 'Westerling',
    gender: 'female',
    imageUrl: avatar('Jeyne W', '1d263b'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['maegor-i']
  },
  {
    id: 'alyssa-velaryon',
    name: 'Alyssa Velaryon',
    title: 'Queen Consort',
    house: 'Velaryon',
    gender: 'female',
    imageUrl: avatar('Alyssa V', '0f2027'),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: ['aenys-i']
  }

  // Generation 3
  ,
  {
    id: 'jaehaerys-i',
    name: 'Jaehaerys I Targaryen',
    title: 'The Conciliator',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Jaehaerys I', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['aenys-i', 'alyssa-velaryon'],
    spouses: ['alysanne']
  },
  {
    id: 'alysanne',
    name: 'Alysanne Targaryen',
    title: 'Good Queen Alysanne',
    house: 'Targaryen',
    gender: 'female',
    imageUrl: avatar('Alysanne', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['aenys-i', 'alyssa-velaryon'],
    spouses: ['jaehaerys-i']
  }

  // Generation 4
  ,
  {
    id: 'baelon',
    name: 'Baelon Targaryen',
    title: 'The Spring Prince',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Baelon', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: false,
    parents: ['jaehaerys-i', 'alysanne'],
    spouses: ['alyssa-t']
  },
  {
    id: 'alyssa-t',
    name: 'Alyssa Targaryen',
    title: 'Princess',
    house: 'Targaryen',
    gender: 'female',
    imageUrl: avatar('Alyssa T', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: false,
    parents: ['jaehaerys-i', 'alysanne'],
    spouses: ['baelon']
  }

  // Generation 5
  ,
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
  }
/*
  // Generation 6
  ,
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
  }

  // Generation 7
  ,
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
  }

  // Generation 8
  ,
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
  }

  // Generation 9
  ,
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
  }

  // Generation 10
  ,
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
  }

  // Generation 11
  ,
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
  }

  // Generation 12
  ,
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
  }

  // Generation 13
  ,
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
    spouses: ['rhaella']
  },
  {
    id: 'rhaella',
    name: 'Rhaella Targaryen',
    title: 'Queen Consort',
    house: 'Targaryen',
    gender: 'female',
    imageUrl: avatar('Rhaella', '2d0b0b'),
    isBastard: false,
    isKingOrQueen: true,
    parents: ['jaehaerys-ii', 'shaera'],
    spouses: ['aerys-ii']
  }

  // Generation 14
  ,
  {
    id: 'rhaegar',
    name: 'Rhaegar Targaryen',
    title: 'Prince of Dragonstone',
    house: 'Targaryen',
    gender: 'male',
    imageUrl: avatar('Rhaegar', '1a0e0e'),
    isBastard: false,
    isKingOrQueen: false,
    parents: ['aerys-ii', 'rhaella'],
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
  }

  // Generation 15
  ,
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
  */
];
