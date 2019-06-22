import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { FieldOptional } from '../../../core/decorators/field-optional.decorator';

@InputType()
export class BoardgameInput {
  private _type = 'input';
  
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @FieldOptional(() => Number)
  @IsNotEmpty()
  @IsArray()
  languageIds: number[] = [];

  @FieldOptional()
  @IsString()
  buyDate: string;

  @FieldOptional()
  @IsNumber()
  @IsPositive()
  playersCountMin: number;

  @FieldOptional()
  @IsNumber()
  @IsPositive()
  playersCountMax: number;

  @FieldOptional()
  @IsNumber()
  @IsPositive()
  playTimeMin: number;

  @FieldOptional()
  @IsNumber()
  @IsPositive()
  playTimeMax: number;

  @FieldOptional()
  @IsNumber()
  bggId: number; 

  @FieldOptional()
  @IsUrl()
  urlTT: string;
}