import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { LanguageRepository } from "./language.repository";

@Entity({
  customRepository: () => LanguageRepository,
  tableName: 'language'
})
export class LanguageEntity {
  private _type = 'entity';

  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  nameEnglish: string;

  @Property()
  nameAlpha3: string;
}