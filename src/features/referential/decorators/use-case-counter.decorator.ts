import { registerDecorator, ValidationOptions } from 'class-validator';
import { UseCaseCounterConstraint } from '../validators/use-case-counter.validator';

export function UseCaseCounterRule(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'UseCaseCounter',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: UseCaseCounterConstraint,
    });
  };
}
