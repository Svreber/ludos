export interface Converter<Input, Output, Entity> {
  inputToEntity(input: Input): Promise<Entity>;
  entityToOutput(entity: Entity): Output;
}
