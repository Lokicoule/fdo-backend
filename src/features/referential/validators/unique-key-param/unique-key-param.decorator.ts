import { registerDecorator, ValidationOptions } from 'class-validator';
import { UniqueKeyParamConstraint } from './unique-key-param.constraint';

export function UniqueKeyRule(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'uniqueKeyParam',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: UniqueKeyParamConstraint,
    });
  };
}
