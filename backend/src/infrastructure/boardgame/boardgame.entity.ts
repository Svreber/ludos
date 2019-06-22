import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LanguageEntity } from '../language/language.entity';

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

  @Column({nullable: true})
  buyDate: string;

  @Column({nullable: true})
  playersCountMin: number;

  @Column({nullable: true})
  playersCountMax: number;

  @Column({nullable: true})
  playTimeMin: number;

  @Column({nullable: true})
  playTimeMax: number;

  @Column({nullable: true})
  boardgameGeekId: number

  @Column({nullable: true})
  urlTricTrac: string
}