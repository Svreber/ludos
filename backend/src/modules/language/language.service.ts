import { Injectable } from '@nestjs/common';
import { logger } from '../../core/utils/logger';
import { LanguageEntity } from '../../infrastructure/language/language.entity';
import { LanguageRepository } from '../../infrastructure/language/language.repository';
import { LanguageConverter } from './domain/language.converter';
import { LanguageOutput } from './domain/language.output';
import { InjectRepository } from "@mikro-orm/nestjs";
import { RequestContext } from "@mikro-orm/core";

@Injectable()
export class LanguageService {
  
  constructor(@InjectRepository(LanguageEntity) private languageRepository: LanguageRepository,
              private languageConverter: LanguageConverter) {
  }

  async getAll(): Promise<LanguageOutput[]> {
    const languageEntities = await this.languageRepository.findAll();
    const languages = languageEntities.map((languageEntity) => this.languageConverter.entityToOutput(languageEntity));
    return languages;
  }

  async createDefaultIfEmpty(): Promise<void> {
    if (await this.languageRepository.count() === 0) {
      logger.info('No languages found in database, creating default English, Français and Italiano...')
      const languageEntity = new LanguageEntity();
      languageEntity.name = "English";
      languageEntity.nameEnglish = "English";
      languageEntity.nameAlpha3 = "ENG";

      await this.languageRepository.fork().persistAndFlush([
        this.save('English', 'English', 'ENG'),
        this.save('Français', 'French', 'FRA'),
        this.save('Italiano', 'Italian', 'ITA')
      ])
    }
  }

  private save(name: string, nameEnglish: string, nameAlpha3: string): LanguageEntity {
    const languageEntity = new LanguageEntity();
    languageEntity.name = name;
    languageEntity.nameEnglish = nameEnglish;
    languageEntity.nameAlpha3 = nameAlpha3;
    return languageEntity
  }
}
