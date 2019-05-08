import { BoardgameRepositoryProvider } from './repositories/boardgame.repository';
import { LudosConnectionProvider } from './database.provider';
import { Module } from '@nestjs/common';
import { LanguageRepositoryProvider } from './repositories/language.repository';
import { BoardgameConverter } from './converters/boardgame.converter';
import { LanguageConverter } from './converters/language.converter';

const Converters = [BoardgameConverter, LanguageConverter];
const Repositories = [BoardgameRepositoryProvider, LanguageRepositoryProvider];

@Module({
  providers: [LudosConnectionProvider, ...Repositories, ...Converters],
  exports: [LudosConnectionProvider, ...Repositories, ...Converters]
})
export class InfrastructureModule {
}