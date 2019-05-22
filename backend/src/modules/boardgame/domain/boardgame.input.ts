import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class BoardgameInput {
  private _type = 'input';
  
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => Number)
  // @IsNumber()
  @IsNotEmpty()
  @IsArray()
  languageIds: number[];

  @Field()
  @IsString()
  @IsNotEmpty()
  buyDate: string;

  @Field()
  @IsNumber()
  @IsPositive()
  playersCountMin: number;

  @Field()
  @IsNumber()
  @IsPositive()
  playersCountMax: number;

  @Field()
  @IsNumber()
  @IsPositive()
  playTimeMin: number;

  @Field()
  @IsNumber()
  @IsPositive()
  playTimeMax: number;

  @Field()
  @IsNumber()
  bggId: number; 

  @Field()
  @IsUrl()
  @IsNotEmpty()
  urlTT: string;
}