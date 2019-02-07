import {IGame} from '@/interfaces/IGame';
import {GameId} from '@/interfaces/types';

export interface IExtension extends IGame {
  baseGame: GameId;
  extensionIndex: number;
  isStandalone: boolean;
}
