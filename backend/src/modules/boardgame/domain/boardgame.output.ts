import { Field, ID, ObjectType } from 'type-graphql';
import { LanguageOutput } from '../../language/domain/language.output';
import { FieldOptional } from '../../../core/decorators/field-optional.decorator';

@ObjectType()
export class BoardgameOutput {
  private _type = 'output';

  @Field(type => ID)
  id?: number;

  @Field()
  name?: string;
  
  @FieldOptional(() => [LanguageOutput])
  languages?: LanguageOutput[];
  
  @FieldOptional()
  buyDate?: string;

  @FieldOptional()
  playersCountMax?: number;

  @FieldOptional()
  playersCountMin?: number;

  @FieldOptional()
  playTimeMax?: number;

  @FieldOptional()
  playTimeMin?: number;

  @FieldOptional()
  bggId?: number; 

  @FieldOptional()
  urlTT?: string;
}
