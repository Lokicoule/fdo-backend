import { registerDecorator, ValidationOptions } from 'class-validator';
import { UseCaseYearConstraint } from '../validators/use-case-year.validator';

export function UseCaseYearRule(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'UseCaseYear',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: UseCaseYearConstraint,
    });
  };
}
