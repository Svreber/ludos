import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { LanguageModule } from '../language/language.module';
import { BoardgameResolver } from './boardgame.resolver';
import { BoardgameService } from './boardgame.service';
import { BoardgameConverter } from './domain/boardgame.converter';
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { BoardgameEntity } from "../../infrastructure/boardgame/boardgame.entity";
import { LanguageEntity } from "../../infrastructure/language/language.entity";

@Module({
  providers: [BoardgameConverter, BoardgameService, BoardgameResolver],
  imports: [InfrastructureModule, LanguageModule, MikroOrmModule.forFeature({entities: [BoardgameEntity, LanguageEntity]})],
})
export class BoardgameModule { }
