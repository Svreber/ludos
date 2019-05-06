import { LudosConnection } from '../database.provider';
import { BoardgameEntity } from '../entities/boardgame.entity';
import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Boardgame } from '../../modules/boardgame/model/boardgame.output';
import { BoardgameInput } from '../../modules/boardgame/dto/boardgame.input';

@EntityRepository(BoardgameEntity)
export class BoardgameRepository extends Repository<BoardgameEntity> {
  // Maybe move this in a ConvertBoardgame class and do a new BoardgameEntity instead of this.create();
  public convertInputToEntity(boardgameInput: BoardgameInput): BoardgameEntity {
    let boardgameEntity = this.create();
    boardgameEntity.name = boardgameInput.name;
    boardgameEntity.buyDate = boardgameInput.buyDate;
    boardgameEntity.playTimeMin = boardgameInput.playTimeMin;
    boardgameEntity.playTimeMax = boardgameInput.playTimeMax;
    boardgameEntity.playersCountMin = boardgameInput.playersCountMin;
    boardgameEntity.playersCountMax = boardgameInput.playersCountMax;
    boardgameEntity.boardgameGeekId = boardgameInput.bggId;
    boardgameEntity.urlTricTrac = boardgameInput.urlTT;
    return boardgameEntity;
  }

  // Maybe move this in a ConvertBoardgame class
  public convertEntityToOutput(boardgameEntity: BoardgameEntity): Boardgame {
    let boardgame = new Boardgame();
    boardgame.id = boardgameEntity.id;
    boardgame.name = boardgameEntity.name;
    boardgame.buyDate = boardgameEntity.buyDate;
    boardgame.playTimeMin = boardgameEntity.playTimeMin;
    boardgame.playTimeMax = boardgameEntity.playTimeMax;
    boardgame.playersCountMin = boardgameEntity.playersCountMin;
    boardgame.playersCountMax = boardgameEntity.playersCountMax;
    boardgame.bggId = boardgameEntity.boardgameGeekId;
    boardgame.urlTT = boardgameEntity.urlTricTrac;
    return boardgame;
  }
}

export const BoardgameRepositoryProvider = {
  provide: BoardgameRepository.name,
  useFactory: (connection: LudosConnection) => connection.getCustomRepository(BoardgameRepository),
  inject: [LudosConnection]
};