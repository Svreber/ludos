import { Connection, createConnection } from 'typeorm';
import { SnakeNamingStrategy } from '../core/utils/snake-naming-strategy';
import { BoardgameEntity } from './boardgame/boardgame.entity';
import { LanguageEntity } from './language/language.entity';

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
      BoardgameEntity,
      LanguageEntity
    ],
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: true
  })
}