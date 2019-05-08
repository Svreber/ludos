import { BoardgameRepository } from '../../infrastructure/repositories/boardgame.repository';
import { Injectable } from '@nestjs/common';
import { LanguageRepository } from '../../infrastructure/repositories/language.repository';
import { Converter } from './converter';
import { BoardgameInput } from '../../modules/boardgame/dto/boardgame.input';
import { BoardgameOutput } from '../../modules/boardgame/model/boardgame.output';
import { BoardgameEntity } from '../entities/boardgame.entity';
import { LanguageConverter } from './language.converter';
import * as _ from  'lodash';

@Injectable()
export class BoardgameConverter implements Converter<BoardgameInput, BoardgameOutput, BoardgameEntity> {
  constructor(private languageConverter: LanguageConverter,
              private languageRepository: LanguageRepository) {
  }

  async inputToEntity(input: BoardgameInput): Promise<BoardgameEntity> {
    let entity = new BoardgameEntity();
    entity.name = input.name;
    entity.languages = await this.languageRepository.findByIds(input.languagesId)
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
    output.languages = _.map(entity.languages, language => this.languageConverter.entityToOutput(language));
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
