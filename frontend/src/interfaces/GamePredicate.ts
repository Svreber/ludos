import {IGame} from '@/interfaces/IGame';
import {IGamesSearchParameters} from '@/interfaces/IGamesSearchParameters';

export type GamePredicate = (game: IGame, params: IGamesSearchParameters) => boolean;
