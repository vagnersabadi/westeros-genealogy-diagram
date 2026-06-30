import { Character } from "../../models/character.model";
import { avatar } from "./avatar";

export const GEN1: Character[] = [
  {
    id: "aegon-i",
    name: "Aegon I Targaryen",
    title: "The Conqueror, The Dragonlord, The Dragon",
    house: "Targaryen",
    gender: "male",
    imageUrl: avatar("Aegon I", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: [],
    spouses: [
      { id: "visenya", nome: "Visenya Targaryen", corTexto: "#d4a0a0" },
      { id: "rhaenys", nome: "Rhaenys Targaryen", corTexto: "#d4a0a0" },
    ],
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
    spouses: [
      { id: "aegon-i", nome: "Aegon I Targaryen", corTexto: "#c89b3c" },
    ],
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
    spouses: [
      { id: "aegon-i", nome: "Aegon I Targaryen", corTexto: "#c89b3c" },
    ],
  },
];
