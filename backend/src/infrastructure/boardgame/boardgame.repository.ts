import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { LudosConnection } from '../database.provider';
import { BoardgameEntity } from './boardgame.entity';

@EntityRepository(BoardgameEntity)
export class BoardgameRepository extends Repository<BoardgameEntity> {
}

export const BoardgameRepositoryProvider = {
  provide: BoardgameRepository.name,
  useFactory: (connection: LudosConnection) => connection.getCustomRepository(BoardgameRepository),
  inject: [LudosConnection]
};