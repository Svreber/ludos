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

@Injectable()
export class BoardgameService {
  constructor(private boardgameRepository: BoardgameRepository,
              private boardgameConverter: BoardgameConverter,
              private languageRepository: LanguageRepository,
              private languageConverter: LanguageConverter) {
  }

  async save(boardgameInput: BoardgameInput): Promise<BoardgameOutput> {
    let boardgameEntity = await this.boardgameConverter.inputToEntity(boardgameInput);
    boardgameEntity = await this.boardgameRepository.save(boardgameEntity);
    return this.boardgameConverter.entityToOutput(boardgameEntity);
  }

  async saveBatch(boardgameInputs: BoardgameInput[]): Promise<BoardgameOutput[]> {
    let boardgameEntities = await Promise.all(boardgameInputs.map(boardgameInput => this.boardgameConverter.inputToEntity(boardgameInput)));
    boardgameEntities = await this.boardgameRepository.save(boardgameEntities);
    return boardgameEntities.map(boardgameEntity => this.boardgameConverter.entityToOutput(boardgameEntity));
  }

  async get(id: number): Promise<BoardgameOutput> {
    let boardgameEntity = await this.boardgameRepository.findOne(id);
    throwIfUndefined(boardgameEntity, new NotFoundException());
    return this.boardgameConverter.entityToOutput(boardgameEntity);
  }

  async getAll(): Promise<BoardgameOutput[]> {
    let boardgameEntities = await this.boardgameRepository.find();
    let boargames = boardgameEntities.map((boardgameEntity) => this.boardgameConverter.entityToOutput(boardgameEntity));
    return boargames;
  }

  async delete(id: number): Promise<BoardgameOutput> {
    let boardgameEntity = await this.boardgameRepository.findOne(id);
    throwIfUndefined(boardgameEntity, new NotFoundException());
    let boardgameOuput = await this.boardgameConverter.entityToOutput(boardgameEntity);
    await this.boardgameRepository.remove(boardgameEntity);
    return boardgameOuput;
  }

  async deleteBatch(ids: number[]): Promise<BoardgameOutput[]> {
    let boardgameEntities = await this.boardgameRepository.findByIds(ids);
    let boardgameOutputs = boardgameEntities.map(boardgameEntity => this.boardgameConverter.entityToOutput(boardgameEntity));
    await this.boardgameRepository.remove(boardgameEntities)
    return boardgameOutputs;
  }

  async update(id: number, boardgameInput: BoardgameInput): Promise<BoardgameOutput> {
    let boardgameEntityOld = await this.boardgameRepository.findOne(id);
    throwIfUndefined(boardgameEntityOld, new NotFoundException());
    let boardgameEntityNew = await this.boardgameConverter.inputToEntity(boardgameInput);
    let boardgameEntityUpdated = Object.assign(boardgameEntityOld, boardgameEntityNew);
    boardgameEntityUpdated = await this.boardgameRepository.save(boardgameEntityUpdated);
    return this.boardgameConverter.entityToOutput(boardgameEntityUpdated);
  }

  async getLanguages(id: number): Promise<LanguageOutput[]> {
    let languageEntities = await this.languageRepository.find({ where: { boardgameId: id } });
    return _.map(languageEntities, languageEntity => this.languageConverter.entityToOutput(languageEntity));
  }
}
