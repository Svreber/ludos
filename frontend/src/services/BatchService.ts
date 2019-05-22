import {Papa} from '@/config/vendors';
import {IGamesImportResult} from '@/interfaces/IGamesImportResult';
import {ParseError} from 'papaparse';
import {INonPersistedGame} from '@/interfaces/IGame';
import {GamesService} from '@/services/GamesService';

export class BatchService {

  private constructor() {
  }

  static parseGamesFile(file: File): Promise<Array<INonPersistedGame>> {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        complete: (results: IGamesImportResult) => resolve(results.data),
        error: (error: ParseError) => reject(error),
        fastMode: false,
        header: true,
        skipEmptyLines: true
      });
    });
  }

  static async parseCsv(file: File): Promise<void> {
    try {
      const uploadedGames = await BatchService.parseGamesFile(file);
      return GamesService.saveAllGames(uploadedGames);
    } catch (error) {
      throw new Error(error);
    }
  }
}
