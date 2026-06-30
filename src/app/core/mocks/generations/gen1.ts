import { Character } from "../../models/character.model";
import { avatar } from "./avatar";

export const GEN1: Character[] = [
  {
    id: "aegon-i",
    name: "Aegon I Targaryen",
    title: "The Conqueror",
    house: "Targaryen",
    gender: "male",
    imageUrl: avatar("Aegon I", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: [],
    spouses: ["visenya", "rhaenys"],
  },
  {
    id: "visenya",
    name: "Visenya Targaryen",
    title: "Queen Consort",
    house: "Targaryen",
    gender: "female",
    imageUrl: avatar("Visenya", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: [],
    spouses: ["aegon-i"],
  },
  {
    id: "rhaenys",
    name: "Rhaenys Targaryen",
    title: "Queen Consort",
    house: "Targaryen",
    gender: "female",
    imageUrl: avatar("Rhaenys", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: [],
    spouses: ["aegon-i"],
  }
];
