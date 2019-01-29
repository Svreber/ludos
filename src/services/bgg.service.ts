import axios from 'axios';
import {BggId} from '@/interfaces/types';

export class BGGService {

  static BGG_API_URL: string = 'https://www.boardgamegeek.com/xmlapi2/';

  static async queryBggData(id: BggId): Promise<string> {
    return axios.get(this.BGG_API_URL + 'thing', {params: {id}})
      .then(response => response.data);
  }

  static async getImageForGame(id: BggId): Promise<string> {
    const data = await BGGService.queryBggData(id);
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, 'application/xml');
    return xml.getElementsByTagName('image')[0].innerHTML;
  }
}
