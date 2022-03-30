import { IGamesSearchParameters } from "./IGamesSearchParameters";
import { IGame } from "./IGame";

export type GamePredicate = (game: IGame, params: IGamesSearchParameters) => boolean;
