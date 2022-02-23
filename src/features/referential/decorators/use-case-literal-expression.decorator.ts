import { registerDecorator, ValidationOptions } from 'class-validator';
import { UseCaseLiteralExpressionConstraint } from '../validators/use-case-literal-expression.validator';

export function UseCaseLiteralExpressionRule(
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'UseCaseLiteralExpression',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: UseCaseLiteralExpressionConstraint,
    });
  };
}
