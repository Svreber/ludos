import { LudosConnection } from '../database.provider';
import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { LanguageEntity } from '../entities/language.entity';

@EntityRepository(LanguageEntity)
export class LanguageRepository extends Repository<LanguageEntity> {
}

export const LanguageRepositoryProvider = {
  provide: LanguageRepository.name,
  useFactory: (connection: LudosConnection) => connection.getCustomRepository(LanguageRepository),
  inject: [LudosConnection]
};