import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { LanguageConverter } from './domain/language.converter';
import { LanguageResolver } from './language.resolver';
import { LanguageService } from './language.service';
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { BoardgameEntity } from "../../infrastructure/boardgame/boardgame.entity";
import { LanguageEntity } from "../../infrastructure/language/language.entity";

@Module({
  providers: [LanguageConverter, LanguageService, LanguageResolver],
  imports: [InfrastructureModule, MikroOrmModule.forFeature({entities: [BoardgameEntity, LanguageEntity]})],
  exports: [LanguageConverter]
})
export class LanguageModule { }
