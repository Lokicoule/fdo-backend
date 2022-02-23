import { registerDecorator, ValidationOptions } from 'class-validator';
import { UniqueKeyConstraint } from '../validators/unique-key.validator';

export function UniqueKeyRule(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'UniqueKeyRule',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: UniqueKeyConstraint,
    });
  };
}
