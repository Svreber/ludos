import {IGame} from '@/interfaces/IGame';

export class TestsResources {

  static readonly DOMINION: IGame = {
    bggId: 1,
    id: 1,
    name: 'Dominion',
    playersCountMin: 2,
    playersCountMax: 4,
    playTimeMin: 30,
    playTimeMax: 30,
    urlTT: ''
  };

  static readonly GLOOMHAVEN: IGame = {
    bggId: 2,
    id: 2,
    name: 'Gloomhaven',
    playersCountMin: 1,
    playersCountMax: 4,
    playTimeMin: 60,
    playTimeMax: 120,
    urlTT: ''
  };

  static readonly SCYTHE: IGame = {
    bggId: 3,
    id: 3,
    name: 'Scythe',
    playersCountMin: 1,
    playersCountMax: 5,
    playTimeMin: 90,
    playTimeMax: 115,
    urlTT: ''
  };

  static readonly THE_7TH_CONTINENT: IGame = {
    bggId: 4,
    id: 4,
    name: 'The 7th Continent',
    playersCountMin: 1,
    playersCountMax: 4,
    playTimeMin: 5,
    playTimeMax: 1000,
    urlTT: ''
  };
}
