import { BoardgameInput } from './dto/boardgame.input';
import { BoardgameOutput } from './model/boardgame.output';
import { BoardgameService } from './boardgame.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@Resolver(BoardgameOutput)
export class BoardgameResolver {

  constructor(private boardgameService: BoardgameService) {
  }

  @Query(returns => BoardgameOutput, { name: 'boardgame' })
  async getBoardgame(@Args('id') id: number): Promise<BoardgameOutput> {
    return this.boardgameService.get(id);
  }

  @Query(returns => [BoardgameOutput], { name: 'boardgames' })
  async getBoardgames(): Promise<BoardgameOutput[]> {
    return this.boardgameService.getAll();
  }

  @Mutation(returns => BoardgameOutput, { name: 'createBoardgame' })
  async createBoardgame(@Args('boardgameInput') boardgameInput: BoardgameInput): Promise<BoardgameOutput> {
    return this.boardgameService.save(boardgameInput);
  }

  @Mutation(returns => BoardgameOutput, { name: 'deleteBoardgame' })
  async deleteBoardgame(@Args('id') id: number): Promise<BoardgameOutput> {
    return this.boardgameService.delete(id);
  }

  @Mutation(returns => BoardgameOutput, { name: 'updateBoardgame' })
  async updateBoardgame(@Args('id') id: number, @Args('boardgameInput') boardgameInput: BoardgameInput): Promise<BoardgameOutput> {
    return this.boardgameService.update(id, boardgameInput);
  }
}
