import { Boardgame } from './model/boardgame.output';
import { BoardgameRepository } from '../../infrastructure/repositories/boardgame.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardgameInput } from './dto/boardgame.input';
import { BoardgameConverter } from "../../infrastructure/converters/boardgame.converter";
import { throwIfUndefined } from "../../core/utils/helpers";

@Injectable()
export class BoardgameService {
  constructor(private boardgameRepository: BoardgameRepository) {
  }

  async save(boardgameInput: BoardgameInput): Promise<Boardgame> {
    let boardgameEntity = BoardgameConverter.inputToEntity(boardgameInput);
    boardgameEntity = await this.boardgameRepository.save(boardgameEntity);
    return BoardgameConverter.entityToOutput(boardgameEntity);
  }

  async get(id: number): Promise<Boardgame> {
    let boardgameEntity = await this.boardgameRepository.findOne(id);
    throwIfUndefined(boardgameEntity, new NotFoundException());
    return BoardgameConverter.entityToOutput(boardgameEntity);
  }

  async getAll(): Promise<Boardgame[]> {
    let boardgameEntities = await this.boardgameRepository.find();
    let boargames = boardgameEntities.map((boardgameEntity) => BoardgameConverter.entityToOutput(boardgameEntity));
    return boargames;
  }

  async delete(id: number): Promise<any> {
    let boardgameEntity = await this.boardgameRepository.findOne(id);
    throwIfUndefined(boardgameEntity, new NotFoundException());
    let boardgameOuput = await BoardgameConverter.entityToOutput(boardgameEntity);
    await this.boardgameRepository.delete(boardgameEntity);
    return boardgameOuput;
  }

  async update(id: number, boardgameInput: BoardgameInput): Promise<Boardgame> {
    let boardgameEntityOld = await this.boardgameRepository.findOne(id);
    throwIfUndefined(boardgameEntityOld, new NotFoundException());
    let boardgameEntityUpdated = Object.assign(boardgameEntityOld, BoardgameConverter.inputToEntity(boardgameInput));
    boardgameEntityUpdated = await this.boardgameRepository.save(boardgameEntityUpdated);
    return BoardgameConverter.entityToOutput(boardgameEntityUpdated);
  }
}
