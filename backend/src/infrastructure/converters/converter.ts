export interface Converter<Input, Output, Entity> {
  inputToEntity(input: Input): Entity;
  entityToOutput(entity: Entity): Output;
}
