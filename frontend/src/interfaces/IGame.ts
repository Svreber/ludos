import {GameId, Date, LanguageId, BggId} from '@/interfaces/types';

export interface INonPersistedGame {
  bggId?: BggId;
  buyDate?: Date;
  extensions?: Array<GameId>;
  isExtension?: boolean;
  languages?: Array<LanguageId>;
  name?: string;
  playersCountMax?: number;
  playersCountMin?: number;
  playTimeMax?: number;
  playTimeMin?: number;
  urlTT?: string;
}

export interface IGame extends INonPersistedGame {
  readonly bggId: BggId;
  readonly buyDate: Date;
  readonly extensions: Array<GameId>;
  readonly id: GameId;
  readonly isExtension: boolean;
  readonly languages: Array<LanguageId>;
  readonly name: string;
  readonly playersCountMax: number;
  readonly playersCountMin: number;
  readonly playTimeMax: number;
  readonly playTimeMin: number;
  readonly urlTT: string;
}
