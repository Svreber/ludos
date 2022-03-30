import { Injectable } from '@nestjs/common';
import { BoardgameEntity } from '../../../infrastructure/boardgame/boardgame.entity';
import { Converter } from '../../../infrastructure/converter';
import { LanguageRepository } from '../../../infrastructure/language/language.repository';
import { BoardgameInput } from './boardgame.input';
import { BoardgameOutput } from './boardgame.output';
import { LanguageEntity } from "../../../infrastructure/language/language.entity";
import { InjectRepository } from "@mikro-orm/nestjs";
import { Collection } from "@mikro-orm/core";

@Injectable()
export class BoardgameConverter implements Converter<BoardgameInput, BoardgameOutput, BoardgameEntity> {
  
  constructor(@InjectRepository(LanguageEntity) private languageRepository: LanguageRepository) {
  }

  async inputToEntity(input: BoardgameInput): Promise<BoardgameEntity> {
    let entity = new BoardgameEntity();
    entity.name = input.name;
    const languages = await this.languageRepository.find({
      id: { $in: input.languageIds }
    });
    entity.languages.add(...languages)
    entity.buyDate = input.buyDate;
    entity.playTimeMin = input.playTimeMin;
    entity.playTimeMax = input.playTimeMax;
    entity.playersCountMin = input.playersCountMin;
    entity.playersCountMax = input.playersCountMax;
    entity.boardgameGeekId = input.bggId;
    entity.urlTricTrac = input.urlTT;
    return entity;
  }

  entityToOutput(entity: BoardgameEntity): BoardgameOutput {
    let output = new BoardgameOutput();
    output.id = entity.id;
    output.name = entity.name;
    output.languages = null; // Fetch if needed by ResolveProperty
    output.buyDate = entity.buyDate;
    output.playTimeMin = entity.playTimeMin;
    output.playTimeMax = entity.playTimeMax;
    output.playersCountMin = entity.playersCountMin;
    output.playersCountMax = entity.playersCountMax;
    output.bggId = entity.boardgameGeekId;
    output.urlTT = entity.urlTricTrac;
    return output;
  }
}
