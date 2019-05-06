import { Converter } from './converter';
import { Boardgame } from '../../modules/boardgame/model/boardgame.output';
import { BoardgameEntity } from '../entities/boardgame.entity';
import { BoardgameInput } from '../../modules/boardgame/dto/boardgame.input';

export const BoardgameConverter: Converter<BoardgameInput, Boardgame, BoardgameEntity> = {
  inputToEntity(input: BoardgameInput): BoardgameEntity {
    let entity = new BoardgameEntity();
    entity.name = input.name;
    entity.buyDate = input.buyDate;
    entity.playTimeMin = input.playTimeMin;
    entity.playTimeMax = input.playTimeMax;
    entity.playersCountMin = input.playersCountMin;
    entity.playersCountMax = input.playersCountMax;
    entity.boardgameGeekId = input.bggId;
    entity.urlTricTrac = input.urlTT;
    return entity;
  },
  entityToOutput(entity: BoardgameEntity): Boardgame {
    let output = new Boardgame();
    output.id = entity.id;
    output.name = entity.name;
    output.buyDate = entity.buyDate;
    output.playTimeMin = entity.playTimeMin;
    output.playTimeMax = entity.playTimeMax;
    output.playersCountMin = entity.playersCountMin;
    output.playersCountMax = entity.playersCountMax;
    output.bggId = entity.boardgameGeekId;
    output.urlTT = entity.urlTricTrac;
    return output;
  }
}
