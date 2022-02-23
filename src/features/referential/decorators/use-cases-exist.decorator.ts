import { registerDecorator, ValidationOptions } from 'class-validator';
import { UseCaseParameterAllowed } from '../enums/usecase.enum';
import { UseCasesExistConstraint } from '../validators/use-cases-exist.validator';

export function UseCasesExistRule(
  useCases: UseCaseParameterAllowed[],
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'UseCasesExist',
      target: object.constructor,
      propertyName: propertyName,
      constraints: useCases,
      options: validationOptions,
      validator: UseCasesExistConstraint,
    });
  };
}
