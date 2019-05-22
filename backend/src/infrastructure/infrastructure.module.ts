import { Module } from '@nestjs/common';
import { BoardgameRepositoryProvider } from './boardgame/boardgame.repository';
import { LudosConnectionProvider } from './database.provider';
import { LanguageRepositoryProvider } from './language/language.repository';

const Repositories = [BoardgameRepositoryProvider, LanguageRepositoryProvider];

@Module({
  providers: [LudosConnectionProvider, ...Repositories],
  exports: [LudosConnectionProvider, ...Repositories]
})
export class InfrastructureModule {
}