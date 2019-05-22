import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { Module } from '@nestjs/common';
import { BoardgameService } from './boardgame.service';
import { BoardgameResolver } from './boardgame.resolver';
import { LanguageModule } from '../language/language.module';

@Module({
  providers: [BoardgameService, BoardgameResolver],
  imports: [InfrastructureModule, LanguageModule]
})
export class BoardgameModule { }
