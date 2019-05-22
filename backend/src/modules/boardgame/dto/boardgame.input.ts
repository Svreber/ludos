import { InputType, Field } from 'type-graphql';
import { IsString, IsNotEmpty, IsNumber, IsPositive, IsUrl, IsArray } from 'class-validator';

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
  languagesId: number[];

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