import { Character } from "../models/character.model";
import { GEN1 } from "./generations/gen1";
import { GEN2 } from "./generations/gen2";
import { GEN3 } from "./generations/gen3";
import { GEN4 } from "./generations/gen4";
// import { GEN_OTHER } from "./generations/gen-other"; // Uncomment to enable generations 5 to 15

export const CHARACTERS_MOCK: Character[] = [
  ...GEN1,
  ...GEN2,
  ...GEN3,
  ...GEN4,
  // ...GEN_OTHER
];
