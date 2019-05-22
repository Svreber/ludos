import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { LanguageModule } from '../language/language.module';
import { BoardgameResolver } from './boardgame.resolver';
import { BoardgameService } from './boardgame.service';
import { BoardgameConverter } from './domain/boardgame.converter';

@Module({
  providers: [BoardgameConverter, BoardgameService, BoardgameResolver],
  imports: [InfrastructureModule, LanguageModule]
})
export class BoardgameModule { }
