import * as _ from 'lodash';
import { GamesFilteringService } from "./GamesFilteringService";
import { GamePredicate } from "../interfaces/GamePredicate";
import { IGamesSearchParameters } from "../interfaces/IGamesSearchParameters";
import { IGame } from "../interfaces/IGame";

export class GamesSearchService {

  private constructor() {
  }

  private static readonly PREDICATES: Array<GamePredicate> = [
    (game, params) => GamesFilteringService.matchesName(game, params.name),
    (game, params) => GamesFilteringService.matchesPlayTimeMin(game, params.playTimeMin),
    (game, params) => GamesFilteringService.matchesPlayTimeMax(game, params.playTimeMax),
    (game, params) => GamesFilteringService.matchesPlayersCount(game, params.playersCount)
  ];

  private static readonly FILTER_USING_PREDICATES: GamePredicate = _.overEvery<any>(GamesSearchService.PREDICATES);

  static getGames(games: Array<IGame>, params: IGamesSearchParameters = {}): Array<IGame> {
    return games.filter(game => GamesSearchService.FILTER_USING_PREDICATES(game, params));
  }
}
