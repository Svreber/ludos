import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { Module } from '@nestjs/common';
import { BoardgameService } from './boardgame.service';
import { BoardgameResolver } from './boardgame.resolver';

@Module({
  providers: [BoardgameService, BoardgameResolver],
  imports: [InfrastructureModule]
})
export class BoardgameModule { }
