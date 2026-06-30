import { Character } from "../../models/character.model";
import { avatar } from "./avatar";

export const GEN6: Character[] = [
  // Viserys + Aemma

  {
    id: "baelon-v-a",
    name: "Baelon Targaryen",
    title: "The Realm's Delight",
    house: "Targaryen",
    gender: "male",
    imageUrl: avatar("Baelon", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: ["viserys-i", "aemma-arryn"],
    spouses: [],
  },
  // Viserys + Alicent
  {
    id: "aegon-ii",
    name: "Aegon Targaryen",
    title: "The Realm's Delight",
    house: "Targaryen",
    gender: "male",
    imageUrl: avatar("Aegon", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: ["viserys-i", "alicent-hightower"],
    spouses: [
      {
        id: "helaena",
        nome: "Helaena Targaryen",
        corTexto: "#c89b3c",
      },
    ],
  },
  {
    id: "helaena",
    name: "Helaena Targaryen",
    title: "The Realm's Delight",
    house: "Targaryen",
    gender: "female",
    imageUrl: avatar("Helaena", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: ["viserys-i", "alicent-hightower"],
    spouses: [
      {
        id: "aegon-ii",
        nome: "Aegon Targaryen",
        corTexto: "#c89b3c",
      },
    ],
  },
  {
    id: "daeron-i",
    name: "Daeron Targaryen",
    title: "The Daring",
    house: "Targaryen",
    gender: "male",
    imageUrl: avatar("Daeron", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: ["viserys-i", "alicent-hightower"],
    spouses: [],
  },
  {
    id: "aemond",
    name: "Aemond Targaryen",
    title: "One-Eye",
    house: "Targaryen",
    gender: "male",
    imageUrl: avatar("Aemond", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: ["viserys-i", "alicent-hightower"],
    spouses: [],
  },
  // Daemon + Laena (placed next to Daemon's lines)
  {
    id: "laena-velaryon",
    name: "Laena Velaryon",
    title: "Lady of Driftmark",
    house: "Velaryon",
    gender: "female",
    imageUrl: avatar("Laena Velaryon", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: false,
    parents: ["rhaenys-ii", "corlys-velaryon"],
    spouses: [{ id: "daemon", nome: "Daemon Targaryen", corTexto: "#d4a0a0" }],
  },

  {
    id: "rhaenyra",
    name: "Rhaenyra Targaryen",
    title: "The Realm's Delight",
    house: "Targaryen",
    gender: "female",
    imageUrl: avatar("Rhaenyra", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: ["viserys-i", "aemma-arryn"],
    spouses: [
      { id: "daemon", nome: "Daemon Targaryen", corTexto: "#c89b3c" },
      { id: "laenor-velaryon", nome: "Laenor Velaryon", corTexto: "#c89b3c" },
    ],
  },
];
