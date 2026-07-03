export interface Spouse {
  id: string;       // Unique identifier (used to link to a Character node if loaded)
  nome: string;     // Display name shown on the diagram
  corTexto: string; // Hex color for the label text (e.g. '#c89b3c')
}

export interface Character {
  id: string;
  name: string;
  title?: string;
  house: string;
  gender: 'male' | 'female';
  imageUrl: string;
  imagesList?: string[];
  wikiUrl?: string;
  galleryUrls?: string[];
  isBastard: boolean;
  isKingOrQueen: boolean;
  parents: string[];   // IDs of parent Characters
  spouses: Spouse[];   // Spouse descriptors
  isChildlessSpouse?: boolean;
}
