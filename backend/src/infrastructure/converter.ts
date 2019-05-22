export interface Converter<Input, Output, Entity> {
  inputToEntity(input: Input): Promise<Entity>;

  /**
   * Convert entity to output should not fetch relations. Relations must be resolved using @ResolveProperty of graphql
   * @param entity 
   */
  entityToOutput(entity: Entity): Output;
}
