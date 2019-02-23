import { ObjectType, Field, ID } from 'nest-type-graphql';

@ObjectType()
export class Boardgame {
  private _type = 'output';

  @Field(type => ID)
  id?: number;
  
  @Field()
  name?: string;
  
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
