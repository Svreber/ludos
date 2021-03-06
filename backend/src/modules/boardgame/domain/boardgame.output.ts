import { Field, ID, ObjectType } from 'type-graphql';
import { LanguageOutput } from '../../language/domain/language.output';

@ObjectType()
export class BoardgameOutput {
  private _type = 'output';

  @Field(type => ID)
  id?: number;

  @Field()
  name?: string;
  
  @Field(() => [LanguageOutput])
  languages?: LanguageOutput[];
  
  @Field()
  buyDate?: string;

  @Field()
  playersCountMax?: number;

  @Field()
  playersCountMin?: number;

  @Field()
  playTimeMax?: number;

  @Field()
  playTimeMin?: number;

  @Field()
  bggId?: number; 

  @Field()
  urlTT?: string;
}
