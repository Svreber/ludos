import { Injectable } from '@nestjs/common';
import { logger } from '../../core/utils/logger';
import { LanguageEntity } from '../../infrastructure/language/language.entity';
import { LanguageRepository } from '../../infrastructure/language/language.repository';
import { LanguageConverter } from './domain/language.converter';
import { LanguageOutput } from './domain/language.output';

@Injectable()
export class LanguageService {
  
  constructor(private languageRepository: LanguageRepository,
              private languageConverter: LanguageConverter) {
  }

  async getAll(): Promise<LanguageOutput[]> {
    let languageEntities = await this.languageRepository.find();
    let languages = languageEntities.map((languageEntity) => this.languageConverter.entityToOutput(languageEntity));
    return languages;
  }

  async createDefaultIfEmpty(): Promise<void> {
    if (await this.languageRepository.count() === 0) {
      logger.info('No languages found in database, creating default English, Français and Italiano...')
      await Promise.all([
        this.save('English', 'English', 'ENG'),
        this.save('Français', 'French', 'FRA'),
        this.save('Italiano', 'Italian', 'ITA')
      ])
    }
  }

  private async save(name: string, nameEnglish: string, nameAlpha3: string): Promise<LanguageEntity> {
    let languageEntity = new LanguageEntity();
    languageEntity.name = name;
    languageEntity.nameEnglish = nameEnglish;
    languageEntity.nameAlpha3 = nameAlpha3;
    return await this.languageRepository.save(languageEntity);
  }
}
