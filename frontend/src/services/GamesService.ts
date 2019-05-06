import axios from 'axios';
import {IGame, INonPersistedGame} from '@/interfaces/IGame';
import {IGraphqlResponse} from '@/interfaces/IGraphqlResponse';
import {IGamesResponse} from '@/interfaces/IGamesResponse';

export class GamesService {

  static API_URL: string = 'http://localhost:3000';
  static GRAPHQL_URL: string = GamesService.API_URL + '/graphql';

  private constructor() {
  }

  static async queryGames(): Promise<Array<IGame>> {
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

  static async saveGame(game: INonPersistedGame): Promise<void> {
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
}
