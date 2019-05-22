import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { LudosConnection } from '../database.provider';
import { LanguageEntity } from './language.entity';

@EntityRepository(LanguageEntity)
export class LanguageRepository extends Repository<LanguageEntity> {
}

export const LanguageRepositoryProvider = {
  provide: LanguageRepository.name,
  useFactory: (connection: LudosConnection) => connection.getCustomRepository(LanguageRepository),
  inject: [LudosConnection]
};