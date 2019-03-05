import axios from 'axios';
import {IGame} from '@/interfaces/IGame';
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
}
