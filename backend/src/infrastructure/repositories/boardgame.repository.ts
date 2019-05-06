import { LudosConnection } from '../database.provider';
import { BoardgameEntity } from '../entities/boardgame.entity';
import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

@EntityRepository(BoardgameEntity)
export class BoardgameRepository extends Repository<BoardgameEntity> {
}

export const BoardgameRepositoryProvider = {
  provide: BoardgameRepository.name,
  useFactory: (connection: LudosConnection) => connection.getCustomRepository(BoardgameRepository),
  inject: [LudosConnection]
};