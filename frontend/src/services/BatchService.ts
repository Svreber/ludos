import { INonPersistedGame } from "../interfaces/IGame";
import { IGamesImportResult } from "../interfaces/IGamesImportResult";
import { ParseError } from "papaparse";
import { GamesService } from "./GamesService";
import { Papa } from "../config/vendors";


export class BatchService {

  private constructor() {
  }

  static parseGamesFile(file: File): Promise<Array<INonPersistedGame>> {
    return new Promise((resolve, reject) => {
      // TODO: FIXME
      // @ts-ignore
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
      // TODO: FIXME
      throw new Error(error as any);
    }
  }
}
