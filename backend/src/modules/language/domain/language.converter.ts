import { Injectable } from '@nestjs/common';
import { Converter } from '../../../infrastructure/converter';
import { LanguageEntity } from '../../../infrastructure/language/language.entity';
import { LanguageOutput } from './language.output';

@Injectable()
export class LanguageConverter implements Converter<any, LanguageOutput, LanguageEntity> {
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
