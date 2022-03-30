import { LanguageEntity } from './language.entity';
import { EntityRepository } from "@mikro-orm/sqlite";

export class LanguageRepository extends EntityRepository<LanguageEntity> {
  fork(): LanguageRepository {
    return new LanguageRepository(this.em.fork(), LanguageEntity);
  }
}