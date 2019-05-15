import {GamesFilteringService} from '@/services/GamesFilteringService';
import {TestsResources} from '@/assets/tests/TestsResources';

describe('GamesFilteringService', () => {

  describe('matchesName', () => {

    it('should accept a game if no name filter is given', () => {
      expect(GamesFilteringService.matchesName(TestsResources.THE_7TH_CONTINENT)).toBeTruthy();
    });

    it('should accept a game if its name contains the name filter', () => {
      expect(GamesFilteringService.matchesName(TestsResources.THE_7TH_CONTINENT, '7th')).toBeTruthy();
    });

    it('should reject a game if its name does not contains the name filter', () => {
      expect(GamesFilteringService.matchesName(TestsResources.THE_7TH_CONTINENT, '8th')).not.toBeTruthy();
    });
  });

  describe('matchesPlayersCount', () => {

    it('should accept a game if no playersCount filter is given', () => {
      expect(GamesFilteringService.matchesPlayersCount(TestsResources.DOMINION)).toBeTruthy();
    });

    it('should accept a game if the playersCount filter is between its min and max players count', () => {
      expect(GamesFilteringService.matchesPlayersCount(TestsResources.DOMINION, 2)).toBeTruthy();
      expect(GamesFilteringService.matchesPlayersCount(TestsResources.DOMINION, 3)).toBeTruthy();
      expect(GamesFilteringService.matchesPlayersCount(TestsResources.DOMINION, 4)).toBeTruthy();
    });

    it('should reject a game if the playersCount filter is below its min players count', () => {
      expect(GamesFilteringService.matchesPlayersCount(TestsResources.DOMINION, 1)).not.toBeTruthy();
    });

    it('should reject a game if the playersCount filter is above its max players count', () => {
      expect(GamesFilteringService.matchesPlayersCount(TestsResources.DOMINION, 5)).not.toBeTruthy();
    });
  });

  describe('matchesPlayTimeMin', () => {

    it('should accept a game if no playTimeMin filter is given', () => {
      expect(GamesFilteringService.matchesPlayTimeMin(TestsResources.GLOOMHAVEN)).toBeTruthy();
    });

    it('should accept a game if the playTimeMin filter is below its min play time', () => {
      expect(GamesFilteringService.matchesPlayTimeMin(TestsResources.GLOOMHAVEN, 30)).toBeTruthy();
      expect(GamesFilteringService.matchesPlayTimeMin(TestsResources.GLOOMHAVEN, 60)).toBeTruthy();
    });

    it('should reject a game if the playTimeMin filter is above its min play time', () => {
      expect(GamesFilteringService.matchesPlayTimeMin(TestsResources.GLOOMHAVEN, 70)).not.toBeTruthy();
      expect(GamesFilteringService.matchesPlayTimeMin(TestsResources.GLOOMHAVEN, 120)).not.toBeTruthy();
      expect(GamesFilteringService.matchesPlayTimeMin(TestsResources.GLOOMHAVEN, 150)).not.toBeTruthy();
    });
  });

  describe('matchesPlayTimeMax', () => {

    it('should accept a game if no playTimeMax filter is given', () => {
      expect(GamesFilteringService.matchesPlayTimeMax(TestsResources.GLOOMHAVEN)).toBeTruthy();
    });

    it('should accept a game if the playTimeMax filter is above its max play time', () => {
      expect(GamesFilteringService.matchesPlayTimeMax(TestsResources.GLOOMHAVEN, 120)).toBeTruthy();
      expect(GamesFilteringService.matchesPlayTimeMax(TestsResources.GLOOMHAVEN, 150)).toBeTruthy();
    });

    it('should reject a game if the playTimeMax filter is below its max play time', () => {
      expect(GamesFilteringService.matchesPlayTimeMax(TestsResources.GLOOMHAVEN, 30)).not.toBeTruthy();
      expect(GamesFilteringService.matchesPlayTimeMax(TestsResources.GLOOMHAVEN, 60)).not.toBeTruthy();
      expect(GamesFilteringService.matchesPlayTimeMax(TestsResources.GLOOMHAVEN, 110)).not.toBeTruthy();
    });
  });
});
