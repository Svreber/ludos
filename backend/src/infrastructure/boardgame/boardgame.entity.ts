import { Collection, Entity, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { LanguageEntity } from '../language/language.entity';
import { BoardgameRepository } from "./boardgame.repository";

@Entity({
  customRepository: () => BoardgameRepository,
  tableName: 'boardgame'
})
export class BoardgameEntity {
  private _type = 'entity';

  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @ManyToMany(() => LanguageEntity)
  languages = new Collection<LanguageEntity>(this);

  @Property()
  buyDate: string;

  @Property()
  playersCountMin: number;

  @Property()
  playersCountMax: number;

  @Property()
  playTimeMin: number;

  @Property()
  playTimeMax: number;

  @Property()
  boardgameGeekId: number

  @Property()
  urlTricTrac: string
}