import { SnakeNamingStrategy } from '../core/utils/snake-naming-strategy';
import { BoardgameEntity } from './entities/boardgame.entity';
import { createConnection, Connection } from 'typeorm';

export class LudosConnection extends Connection {
}

// FIXME info should be in configuration
export const LudosConnectionProvider = {
  provide: LudosConnection.name,
  useFactory: async () => await createConnection({
    name: 'LudosDB',
    type: 'sqlite',
    database: 'ludos.sqlite3',
    entities: [
      BoardgameEntity
    ],
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: true
  })
}