import axios from 'axios';
import {IGame, INonPersistedGame} from '@/interfaces/IGame';
import {IGraphqlResponse} from '@/interfaces/IGraphqlResponse';
import {IGamesResponse} from '@/interfaces/IGamesResponse';

export class GamesService {

  static API_URL: string = 'http://localhost:3000';
  static GRAPHQL_URL: string = GamesService.API_URL + '/graphql';

  private constructor() {
  }

  static queryGames(): Promise<Array<IGame>> {
    const query = `
      query {
        boardgames {
          id,
          name,
          bggId,
          urlTT,
          playersCountMin,
          playersCountMax,
          playTimeMin,
          playTimeMax,
          buyDate
        }
      }
    `;

    return axios.post<IGraphqlResponse<IGamesResponse>>(GamesService.GRAPHQL_URL, {query})
      .then(response => response.data.data.boardgames);
  }

  static saveGame(game: INonPersistedGame): Promise<void> {
    const query = `
      mutation {
        createBoardgame(boardgameInput: {
          name: "${game.name}",
          buyDate: "${game.buyDate}",
          playersCountMin: ${game.playersCountMin},
          playersCountMax: ${game.playersCountMax},
          playTimeMin: ${game.playTimeMin},
          playTimeMax: ${game.playTimeMax},
          bggId: ${game.bggId},
          urlTT: "${game.urlTT}"
        }) {
          id,
          name
        }
      }
    `;

    return axios.post<void>(GamesService.GRAPHQL_URL, {query})
      .then(response => response.data);
  }

  static saveAllGames(games: Array<INonPersistedGame>): Promise<void> {
    return games.reduce(async (previousPromise, game) => {
      await previousPromise;
      return GamesService.saveGame(game);
    }, Promise.resolve());
  }

  static deleteGame(game: IGame): Promise<void> {
    const query = `
      mutation {
        deleteBoardgame(id: ${game.id}) {
          id,
          name
        }
      }
    `;

    return axios.post<void>(GamesService.GRAPHQL_URL, {query})
      .then(response => response.data);
  }
}
