import { SquareMemory } from "../interfaces/interfaces";

/**
 *
 * @param list shuffle list
 * @returns
 */
export function shuffle(list: Array<SquareMemory>): Array<SquareMemory> {
  return list.sort(() => Math.random() - 0.5);
}
