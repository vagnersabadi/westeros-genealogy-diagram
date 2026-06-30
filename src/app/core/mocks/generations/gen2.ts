import { Character } from "../../models/character.model";
import { avatar } from "./avatar";

export const GEN2: Character[] = [
  {
    id: "aenys-i",
    name: "Aenys I Targaryen",
    title: "King of the Andals",
    house: "Targaryen",
    gender: "male",
    imageUrl: avatar("Aenys I", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: ["rhaenys"],
    spouses: [
      { id: "alyssa-velaryon", nome: "Alyssa Velaryon", corTexto: "#7ecfcf" },
    ],
  },
  {
    id: "maegor-i",
    name: "Maegor I Targaryen",
    title: "The Cruel",
    house: "Targaryen",
    gender: "male",
    imageUrl: avatar("Maegor I", "1a0e0e"),
    isBastard: false,
    isKingOrQueen: true,
    parents: ["visenya"],
    spouses: [
      { id: "ceryse-hightower",  nome: "Ceryse Hightower",       corTexto: "#a8d5a2" },
      { id: "alys-harroway",     nome: "Alys Harroway",          corTexto: "#b0b0b0" },
      { id: "tyanna-towers",     nome: "Tyanna of the Towers",   corTexto: "#c09fd8" },
      { id: "elinor-costayne",   nome: "Elinor Costayne",        corTexto: "#90bcd4" },
      { id: "jeyne-westerling",  nome: "Jeyne Westerling",       corTexto: "#90bcd4" },
    ],
  },
  {
    id: "alyssa-velaryon",
    name: "Alyssa Velaryon",
    title: "Queen Consort",
    house: "Velaryon",
    gender: "female",
    imageUrl: avatar("Alyssa V", "0f2027"),
    isBastard: false,
    isKingOrQueen: false,
    parents: [],
    spouses: [{ id: "aenys-i", nome: "Aenys I Targaryen", corTexto: "#c89b3c" }],
  }
];
