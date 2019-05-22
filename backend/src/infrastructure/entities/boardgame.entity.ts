import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { LanguageEntity } from "./language.entity";

@Entity('boardgame')
export class BoardgameEntity {
  private _type = 'entity';

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(type => LanguageEntity)
  @JoinTable({name: "join_boardgame_language"})
  languages: LanguageEntity[];

  @Column()
  buyDate: string;

  @Column()
  playersCountMin: number;

  @Column()
  playersCountMax: number;

  @Column()
  playTimeMin: number;

  @Column()
  playTimeMax: number;

  @Column()
  boardgameGeekId: number

  @Column()
  urlTricTrac: string
}