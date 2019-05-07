import {ParseResult} from 'papaparse';
import {INonPersistedGame} from '@/interfaces/IGame';

export interface IGamesImportResult extends ParseResult {
  data: Array<INonPersistedGame>;
}