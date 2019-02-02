import {IGame} from '@/interfaces/IGame';

export class GamesService {

  private constructor() {
  }

  static async queryGames(): Promise<Array<IGame>> {
    return [{
      bggId: '239188',
      buyDate: '2018',
      extensions: [],
      id: 1,
      isExtension: false,
      languages: ['fr'],
      name: 'Chronicles of Crime',
      playersCountMax: 4,
      playersCountMin: 1,
      playTimeMax: 90,
      playTimeMin: 60,
      urlTT: 'https://www.trictrac.net/jeu-de-societe/chronicles-of-crime'
    }, {
      bggId: '194594',
      buyDate: '2018',
      extensions: [],
      id: 2,
      isExtension: false,
      languages: ['fr'],
      name: 'Dice Forge',
      playersCountMax: 4,
      playersCountMin: 2,
      playTimeMax: 45,
      playTimeMin: 45,
      urlTT: 'https://www.trictrac.net/jeu-de-societe/dice-forge'
    }, {
      bggId: '156129',
      buyDate: '2017',
      extensions: [],
      id: 3,
      isExtension: false,
      languages: ['fr'],
      name: 'CS Files',
      playersCountMax: 12,
      playersCountMin: 4,
      playTimeMax: 45,
      playTimeMin: 45,
      urlTT: 'https://www.trictrac.net/jeu-de-societe/cs-files'
    }];
  }
}
