import { BggId, GameId } from "./types";

export interface INonPersistedGame {
  bggId?: BggId;
  name?: string;
  playersCountMax?: number;
  playersCountMin?: number;
  playTimeMax?: number;
  playTimeMin?: number;
  urlTT?: string;

  // To be added in later versions
  buyDate?: Date;
  // extensions?: Array<GameId>;
  // isExtension?: boolean;
  // languages?: Array<LanguageId>;
}

export interface IGame extends Required<INonPersistedGame>{
  id: GameId
}
