import { Character } from "../../models/character.model";
import { avatar } from "./avatar";

export const GEN5: Character[] = [
  {
    id: "viserys-i",
    name: "Viserys I Targaryen",
    title: "King of the Andals",
    house: "Targaryen",
    gender: "male",
    imageUrl: avatar("Viserys I", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: ["baelon", "alyssa-t"],
    spouses: [
      { id: "aemma-arryn", nome: "Aemma Arryn", corTexto: "#90bcd4" },
      {
        id: "alicent-hightower",
        nome: "Alicent Hightower",
        corTexto: "#90bcd4",
      },
    ],
  },
  {
    id: "daemon",
    name: "Daemon Targaryen",
    title: "The Rogue Prince",
    house: "Targaryen",
    gender: "male",
    imageUrl: avatar("Daemon", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: false,
    parents: ["baelon", "alyssa-t"],
    spouses: [
      { id: "rhaenyra", nome: "Rhaenyra Targaryen", corTexto: "#d4a0a0" },
      { id: "laena-velaryon", nome: "Laena Velaryon", corTexto: "#d4a0a0" },
      { id: "rhea-royce", nome: "Rhea Royce", corTexto: "#d4a0a0" },
    ],
  },
  {
    id: "rhaenys-ii",
    name: "Rhaenys Targaryen",
    title: "The Queen Who Never Was",
    house: "Targaryen",
    gender: "female",
    imageUrl: avatar("Rhaenys", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: false,
    parents: ["aemon", "jocelyn"],
    spouses: [
      { id: "corlys-velaryon", nome: "Corlys Velaryon", corTexto: "#d4a0a0" },
    ],
  },
  {
    id: "aegon-iv",
    name: "Aegon Targaryen",
    title: "Prince",
    house: "Targaryen",
    gender: "male",
    imageUrl: avatar("Aegon", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: false,
    parents: ["baelon", "alyssa-t"],
    spouses: [],
  },
];
