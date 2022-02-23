import { registerDecorator, ValidationOptions } from 'class-validator';
import { UseCaseParameterAllowed } from '../enums/usecase.enum';
import { UseCasesUniqueConstraint } from '../validators/use-cases-unique.validator';

export function UseCasesUniqueRule(
  useCases: UseCaseParameterAllowed[],
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'UseCasesUnique',
      target: object.constructor,
      propertyName: propertyName,
      constraints: useCases,
      options: validationOptions,
      validator: UseCasesUniqueConstraint,
    });
  };
}
