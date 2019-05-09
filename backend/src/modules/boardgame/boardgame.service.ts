import { BoardgameOutput } from './model/boardgame.output';
import { BoardgameRepository } from '../../infrastructure/repositories/boardgame.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardgameInput } from './dto/boardgame.input';
import { throwIfUndefined } from "../../core/utils/helpers";
import { BoardgameConverter } from '../../infrastructure/converters/boardgame.converter';

@Injectable()
export class BoardgameService {
  constructor(private boardgameRepository: BoardgameRepository,
              private boardgameConverter: BoardgameConverter) {
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
    let boardgameEntity = await this.boardgameRepository.findOne(id, { relations: ['languages'] });
    throwIfUndefined(boardgameEntity, new NotFoundException());
    return this.boardgameConverter.entityToOutput(boardgameEntity);
  }

  async getAll(): Promise<BoardgameOutput[]> {
    let boardgameEntities = await this.boardgameRepository.find({ relations: ['languages'] });
    let boargames = boardgameEntities.map((boardgameEntity) => this.boardgameConverter.entityToOutput(boardgameEntity));
    return boargames;
  }

  async delete(id: number): Promise<BoardgameOutput> {
    let boardgameEntity = await this.boardgameRepository.findOne(id, { relations: ['languages'] });
    throwIfUndefined(boardgameEntity, new NotFoundException());
    let boardgameOuput = await this.boardgameConverter.entityToOutput(boardgameEntity);
    await this.boardgameRepository.remove(boardgameEntity);
    return boardgameOuput;
  }

  async deleteBatch(ids: number[]): Promise<BoardgameOutput[]> {
    let boardgameEntities = await this.boardgameRepository.findByIds(ids, { relations: ['languages'] });
    let boardgameOutputs = boardgameEntities.map(boardgameEntity => this.boardgameConverter.entityToOutput(boardgameEntity));
    await this.boardgameRepository.remove(boardgameEntities)
    return boardgameOutputs;
  }

  async update(id: number, boardgameInput: BoardgameInput): Promise<BoardgameOutput> {
    let boardgameEntityOld = await this.boardgameRepository.findOne(id, { relations: ['languages'] });
    throwIfUndefined(boardgameEntityOld, new NotFoundException());
    let boardgameEntityNew = await this.boardgameConverter.inputToEntity(boardgameInput);
    let boardgameEntityUpdated = Object.assign(boardgameEntityOld, boardgameEntityNew);
    boardgameEntityUpdated = await this.boardgameRepository.save(boardgameEntityUpdated);
    return this.boardgameConverter.entityToOutput(boardgameEntityUpdated);
  }
}
