import { INonPersistedGame } from "./IGame";
import { ParseResult } from "papaparse";

export interface IGamesImportResult extends ParseResult<INonPersistedGame> {
}
