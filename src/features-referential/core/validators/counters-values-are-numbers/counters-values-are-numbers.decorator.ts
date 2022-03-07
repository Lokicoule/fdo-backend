import { registerDecorator, ValidationOptions } from 'class-validator';
import { CountersValuesAreNumbersConstraint } from './counters-values-are-numbers.constraint';

export function CountersValuesAreNumbersRule(
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'countersValuesAreNumbers',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: CountersValuesAreNumbersConstraint,
    });
  };
}
