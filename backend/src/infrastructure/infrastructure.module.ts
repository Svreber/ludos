import { BoardgameRepositoryProvider } from './repositories/boardgame.repository';
import { LudosConnectionProvider } from './database.provider';
import { Module } from '@nestjs/common';


// Setup of the database

@Module({
    providers: [LudosConnectionProvider, BoardgameRepositoryProvider],
    exports: [LudosConnectionProvider, BoardgameRepositoryProvider]
})
export class InfrastructureModule {
}