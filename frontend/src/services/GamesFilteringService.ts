import * as _ from 'lodash';
import {IGame} from '@/interfaces/IGame';

export class GamesFilteringService {

  private constructor() {
  }

  static matchesName(game: IGame, name?: string): boolean {
    return !GamesFilteringService.isString(name) || game.name.includes(name);
  }

  static matchesPlayTime(game: IGame, playTime?: number): boolean {
    return !GamesFilteringService.isNumber(playTime) || (playTime >= game.playTimeMin && playTime <= game.playTimeMax);
  }

  static matchesPlayersCount(game: IGame, playersCount?: number): boolean {
    return !GamesFilteringService.isNumber(playersCount) || (playersCount >= game.playersCountMin && playersCount <= game.playersCountMax);
  }

  private static isString(value?: string): value is string {
    return !_.isEmpty(value);
  }

  private static isNumber(value?: number): value is number {
    return _.isFinite(value);
  }
}