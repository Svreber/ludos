import {GameId, Date, LanguageId, BggId} from '@/interfaces/types';

export interface IGame {
  bggId: BggId;
  buyDate: Date;
  extensions: Array<GameId>;
  id: GameId;
  isExtension: boolean;
  languages: Array<LanguageId>;
  name: string;
  playersCountMax: number;
  playersCountMin: number;
  playTimeMax: number;
  playTimeMin: number;
  urlTT: string;
}
