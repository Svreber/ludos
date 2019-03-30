import { BoardgameInput } from './dto/boardgame.input';
import { Boardgame } from './model/boardgame.output';
import { BoardgameService } from './boardgame.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@Resolver(Boardgame)
export class BoardgameResolver {

  constructor(private boardgameService: BoardgameService) {
  }

  @Query(returns => Boardgame, { name: 'boardgame' })
  async getBoardgame(@Args('id') id: number): Promise<Boardgame> {
    return this.boardgameService.get(id);
  }

  @Query(returns => [Boardgame], { name: 'boardgames' })
  async getBoardgames(): Promise<Boardgame[]> {
    return this.boardgameService.getAll();
  }

  @Mutation(returns => Boardgame, { name: 'createBoardgame' })
  async createBoardgame(@Args('boardgameInput') boardgameInput: BoardgameInput): Promise<Boardgame> {
    return this.boardgameService.save(boardgameInput);
  }
}
