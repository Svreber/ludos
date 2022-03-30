import { Injectable, NotFoundException } from '@nestjs/common';
import { throwIfUndefined } from '../../core/utils/helpers';
import { BoardgameRepository } from '../../infrastructure/boardgame/boardgame.repository';
import { LanguageRepository } from '../../infrastructure/language/language.repository';
import { LanguageConverter } from '../language/domain/language.converter';
import { LanguageOutput } from '../language/domain/language.output';
import { BoardgameConverter } from './domain/boardgame.converter';
import { BoardgameInput } from './domain/boardgame.input';
import { BoardgameOutput } from './domain/boardgame.output';
import * as _ from 'lodash';
import { wrap } from "@mikro-orm/core";
import { InjectRepository } from "@mikro-orm/nestjs";
import { LanguageEntity } from "../../infrastructure/language/language.entity";
import { BoardgameEntity } from "../../infrastructure/boardgame/boardgame.entity";

@Injectable()
export class BoardgameService {
  constructor(@InjectRepository(BoardgameEntity) private boardgameRepository: BoardgameRepository,
              private boardgameConverter: BoardgameConverter,
              @InjectRepository(LanguageEntity) private languageRepository: LanguageRepository,
              private languageConverter: LanguageConverter) {
  }

  async save(boardgameInput: BoardgameInput): Promise<BoardgameOutput> {
    const boardgameEntity = await this.boardgameConverter.inputToEntity(boardgameInput);
    await this.boardgameRepository.persistAndFlush(boardgameEntity);
    return this.boardgameConverter.entityToOutput(boardgameEntity);
  }

  async saveBatch(boardgameInputs: BoardgameInput[]): Promise<BoardgameOutput[]> {
    const boardgameEntities = await Promise.all(boardgameInputs.map(boardgameInput => this.boardgameConverter.inputToEntity(boardgameInput)));
    await this.boardgameRepository.persistAndFlush(boardgameEntities);
    return boardgameEntities.map(boardgameEntity => this.boardgameConverter.entityToOutput(boardgameEntity));
  }

  async get(id: number): Promise<BoardgameOutput> {
    const boardgameEntity = await this.boardgameRepository.findOne(id);
    throwIfUndefined(boardgameEntity, new NotFoundException());
    return this.boardgameConverter.entityToOutput(boardgameEntity);
  }

  async getAll(): Promise<BoardgameOutput[]> {
    const boardgameEntities = await this.boardgameRepository.findAll();
    const boargames = boardgameEntities.map((boardgameEntity) => this.boardgameConverter.entityToOutput(boardgameEntity));
    return boargames;
  }

  async delete(id: number): Promise<BoardgameOutput> {
    const boardgameEntity = await this.boardgameRepository.findOne(id);
    throwIfUndefined(boardgameEntity, new NotFoundException());
    const boardgameOuput = await this.boardgameConverter.entityToOutput(boardgameEntity);
    await this.boardgameRepository.removeAndFlush(boardgameEntity);
    return boardgameOuput;
  }

  async deleteBatch(ids: number[]): Promise<BoardgameOutput[]> {
    const boardgameEntities = await this.boardgameRepository.find(ids);
    const boardgameOutputs = boardgameEntities.map(boardgameEntity => this.boardgameConverter.entityToOutput(boardgameEntity));
    await this.boardgameRepository.removeAndFlush(boardgameEntities)
    return boardgameOutputs;
  }

  async update(id: number, boardgameInput: BoardgameInput): Promise<BoardgameOutput> {
    const boardgameEntity = await this.boardgameRepository.findOne(id);
    throwIfUndefined(boardgameEntity, new NotFoundException());
    const boardgameEntityNew = await this.boardgameConverter.inputToEntity(boardgameInput);
    wrap(boardgameEntity).assign(boardgameEntityNew);
    await this.boardgameRepository.flush();
    return this.boardgameConverter.entityToOutput(boardgameEntity);
  }

  async getLanguages(id: number): Promise<LanguageOutput[]> {
    const languageEntities = await this.languageRepository.find({ id });
    return _.map(languageEntities, languageEntity => this.languageConverter.entityToOutput(languageEntity));
  }
}
