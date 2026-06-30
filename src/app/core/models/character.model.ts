export interface Character {
  id: string;
  name: string;
  title?: string;
  house: string;
  gender: 'male' | 'female';
  imageUrl: string;
  isBastard: boolean;
  isKingOrQueen: boolean;
  parents: string[]; // IDs of parents
  spouses: string[]; // IDs of spouses
  isChildlessSpouse?: boolean;
}
