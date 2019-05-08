import { Injectable } from '@nestjs/common';
import { LanguageOutput } from './model/language.output';
import { LanguageRepository } from '../../infrastructure/repositories/language.repository';
import { LanguageConverter } from '../../infrastructure/converters/language.converter';

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
}
