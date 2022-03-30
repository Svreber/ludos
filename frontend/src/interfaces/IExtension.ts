import { GameId } from "./types";
import { IGame } from "./IGame";

export interface IExtension extends IGame {
  baseGame: GameId;
  extensionIndex: number;
  isStandalone: boolean;
}
