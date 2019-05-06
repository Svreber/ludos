import axios from 'axios';
import {IGame, INonPersistedGame} from '@/interfaces/IGame';
import {IGraphqlResponse} from '@/interfaces/IGraphqlResponse';
import {IGamesResponse} from '@/interfaces/IGamesResponse';

export class GamesService {

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

    return axios.post<IGraphqlResponse<IGamesResponse>>('http://localhost:3000/graphql', {query})
        .then(response => response.data.data.boardgames);
  }

  static async saveGame(game: INonPersistedGame): Promise<void> {
    const query = `
      mutation {
        createBoardgame(boardgameInput: {
          name: "${game.name}",
          buyDate: "${game.buyDate}",
          playersCountMax: ${game.playersCountMax},
          playersCountMin: ${game.playersCountMin},
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

    return axios.post<void>('http://localhost:3000/graphql', {query})
        .then(response => response.data);
  }
}
