import { registerDecorator, ValidationOptions } from 'class-validator';
import { ParameterReferentialEnumType } from '../../enums/parameter-referential.enum';
import { ParamsContainsKeysConstraint } from './params-contains-keys.constraint';

export function ParamsContainsKeysRule<T extends ParameterReferentialEnumType>(
  neededKeys: T[],
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'paramsContainsKeys',
      target: object.constructor,
      propertyName: propertyName,
      constraints: neededKeys,
      options: validationOptions,
      validator: ParamsContainsKeysConstraint,
    });
  };
}
