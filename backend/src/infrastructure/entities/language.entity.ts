import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('language')
export class LanguageEntity {
  private _type = 'entity';

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nameEnglish: string;

  @Column()
  nameAlpha3: string;
}