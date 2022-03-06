import { registerDecorator, ValidationOptions } from 'class-validator';
import { CounterKeyParamConstraint } from './counter-key-param.constraint';

export function CounterKeyParamRule(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'counterKeyParam',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: CounterKeyParamConstraint,
    });
  };
}
