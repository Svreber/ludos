import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class LanguageOutput {
  private _type = 'output';

  @Field(type => ID)
  id?: number;
  
  @Field()
  name?: string;
  
  @Field()
  nameEnglish?: string;

  @Field()
  nameAlpha3?: string;
}
