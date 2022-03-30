import { EntityRepository } from '@mikro-orm/sqlite';
import { BoardgameEntity } from './boardgame.entity';

export class BoardgameRepository extends EntityRepository<BoardgameEntity> {
  fork(): BoardgameRepository {
    return new BoardgameRepository(this.em.fork(), BoardgameEntity);
  }
}
