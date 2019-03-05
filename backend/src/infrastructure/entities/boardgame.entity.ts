import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('boardgame')
export class BoardgameEntity {
  private _type = 'entity';

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

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