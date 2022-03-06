import { registerDecorator, ValidationOptions } from 'class-validator';
import { ParameterReferentialEnumType } from '../../enums/parameter-referential.enum';
import { ExistsKeyParamConstraint } from './exists-key-param.constraint';

export function ExistsKeyParamRule<T extends ParameterReferentialEnumType>(
  neededKeys: T[],
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'existsKeyParam',
      target: object.constructor,
      propertyName: propertyName,
      constraints: neededKeys,
      options: validationOptions,
      validator: ExistsKeyParamConstraint,
    });
  };
}
