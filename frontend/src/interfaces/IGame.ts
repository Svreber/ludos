import {GameId, BggId} from '@/interfaces/types';

export interface INonPersistedGame {
  bggId?: BggId;
  name?: string;
  playersCountMax?: number;
  playersCountMin?: number;
  playTimeMax?: number;
  playTimeMin?: number;
  urlTT?: string;

  // To be added in later versions
  // buyDate?: Date;
  // extensions?: Array<GameId>;
  // isExtension?: boolean;
  // languages?: Array<LanguageId>;
}

export interface IGame extends INonPersistedGame {
  readonly bggId: BggId;
  readonly id: GameId;
  readonly name: string;
  readonly playersCountMax: number;
  readonly playersCountMin: number;
  readonly playTimeMax: number;
  readonly playTimeMin: number;
  readonly urlTT: string;
}
