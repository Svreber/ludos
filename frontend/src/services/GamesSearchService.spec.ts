import {GamesSearchService} from '@/services/GamesSearchService';
import {TestsResources} from '@/assets/tests/TestsResources';
import {IGame} from '@/interfaces/IGame';
import {IGamesSearchParameters} from '@/interfaces/IGamesSearchParameters';

describe('GamesSearchService', () => {

  let filters: IGamesSearchParameters;
  let games: Array<IGame>;

  beforeAll(() => {
    games = [
      TestsResources.DOMINION,
      TestsResources.GLOOMHAVEN,
      TestsResources.SCYTHE,
      TestsResources.THE_7TH_CONTINENT,
      TestsResources.ANDOR
    ];
  });

  describe('getGames', () => {

    it('should return all games if no filter is provided', () => {
      expect(GamesSearchService.getGames(games)).toEqual(games);
    });

    it('should return only games whose name contains the name filter', () => {
      filters = {
        name: 'on'
      };
      expect(GamesSearchService.getGames(games, filters)).toEqual([
        TestsResources.DOMINION,
        TestsResources.THE_7TH_CONTINENT
      ]);
    });

    it('should return only games for which the playersCount filter is between their min and max players count', () => {
      filters = {
        playersCount: 1
      };
      expect(GamesSearchService.getGames(games, filters)).toEqual([
        TestsResources.GLOOMHAVEN,
        TestsResources.SCYTHE,
        TestsResources.THE_7TH_CONTINENT
      ]);
    });

    it('should return only games for which the min/max playTime filter is between their min/max play time', () => {
      filters = {
        playTimeMin: 50,
        playTimeMax: 115
      };
      expect(GamesSearchService.getGames(games, filters)).toEqual([
        TestsResources.SCYTHE,
        TestsResources.ANDOR
      ]);
    });

    it('should return only games matching all filters', () => {
      filters = {
        name: 'n',
        playersCount: 1,
        playTimeMin: 30,
        playTimeMax: 120
      };
      expect(GamesSearchService.getGames(games, filters)).toEqual([
        TestsResources.GLOOMHAVEN
      ]);
    });
  });
});
