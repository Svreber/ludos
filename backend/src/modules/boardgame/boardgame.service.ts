import { Boardgame } from './model/boardgame.output';
import { BoardgameRepository } from '../../infrastructure/repositories/boardgame.repository';
import { Injectable } from '@nestjs/common';
import { BoardgameInput } from './dto/boardgame.input';
import { BoardgameConverter } from "../../infrastructure/converters/boardgame.converter";

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
    return BoardgameConverter.entityToOutput(boardgameEntity);
  }

  async getAll(): Promise<Boardgame[]> {
    let boardgameEntities = await this.boardgameRepository.find();
    let boargames = boardgameEntities.map((boardgameEntity) => BoardgameConverter.entityToOutput(boardgameEntity));
    return boargames;
  }
}
