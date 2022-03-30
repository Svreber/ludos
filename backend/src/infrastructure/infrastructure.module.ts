import { Module } from '@nestjs/common';
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { BoardgameEntity } from "./boardgame/boardgame.entity";
import { LanguageEntity } from "./language/language.entity";

@Module({
  imports: [
    MikroOrmModule.forRoot({
      name: "LudosDB",
      dbName: "ludos.sqlite3",
      type: "sqlite",
      entities: [BoardgameEntity, LanguageEntity],
      debug: true
    })
  ]
})
export class InfrastructureModule {
}