import { Field } from 'type-graphql';
import { IsOptional } from 'class-validator';
import { MethodAndPropDecorator, AdvancedOptions, ReturnTypeFunc } from 'type-graphql/dist/decorators/types';
import { getTypeDecoratorParams } from 'type-graphql/dist/helpers/decorators';
/**
 * Combines @Field (type-graphql) and @IsOptional (class-validator). No parameters are accepted for @IsOptional
 * @param fieldOptions options that passes to @Field()
 */
export function FieldOptional(): MethodAndPropDecorator;
export function FieldOptional(options: AdvancedOptions): MethodAndPropDecorator;
export function FieldOptional(returnTypeFunction?: ReturnTypeFunc, options?: AdvancedOptions): MethodAndPropDecorator;
export function FieldOptional(returnTypeFuncOrOptions?: ReturnTypeFunc | AdvancedOptions, maybeOptions?: AdvancedOptions): MethodDecorator | PropertyDecorator {
  const { options, returnTypeFunc } = getTypeDecoratorParams(returnTypeFuncOrOptions, maybeOptions);

  const fieldFn = createField(returnTypeFunc, { ...options, nullable: true });
  const isOptionalFn = IsOptional();

  return (target: Object, key: string) => {
    fieldFn(target, key);
    isOptionalFn(target, key);
  }
}

function createField(returnTypeFunc: ReturnTypeFunc, options: Partial<AdvancedOptions>): MethodAndPropDecorator {
  if (returnTypeFunc) {
    return Field(returnTypeFunc, options);
  } else {
    return Field(options)
  }
}