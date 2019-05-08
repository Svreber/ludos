import { Injectable } from '@nestjs/common';
import { LanguageRepository } from '../../infrastructure/repositories/language.repository';
import { Converter } from './converter';
import { LanguageOutput } from '../../modules/language/model/language.output';
import { LanguageEntity } from '../entities/language.entity';

@Injectable()
export class LanguageConverter implements Converter<any, LanguageOutput, LanguageEntity> {
  constructor(private languageRepository: LanguageRepository) {
  }

  async inputToEntity(input: any): Promise<LanguageEntity> {
    throw new Error("Method not implemented.");
  }
  
  entityToOutput(entity: LanguageEntity): LanguageOutput {
    let output = new LanguageOutput();
    output.id = entity.id;
    output.name = entity.name;
    output.nameEnglish = entity.nameEnglish;
    output.nameAlpha3 = entity.nameAlpha3;
    return output;
  }
}
