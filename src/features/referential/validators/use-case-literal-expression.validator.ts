import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ReferentialParameterInput } from '../dtos/referential-parameter.input';
import { UseCaseParameterAllowed } from '../enums/usecase.enum';

@ValidatorConstraint({ name: 'UseCaseLiteralExpression' })
@Injectable()
export class UseCaseLiteralExpressionConstraint
  implements ValidatorConstraintInterface
{
  private readonly LITERAL_EXPRESSION_KEY =
    UseCaseParameterAllowed.LITERAL_EXPRESSION.toUpperCase();

  validate(parameters: ReferentialParameterInput[]): boolean {
    const pattern = parameters.find(
      (item) => item?.useCase?.toUpperCase() === this.LITERAL_EXPRESSION_KEY,
    );
    const others = parameters.filter(
      (item) => item.useCase?.toUpperCase() !== this.LITERAL_EXPRESSION_KEY,
    );

    return others.every((item) =>
      pattern?.value.includes(`\$\{${item?.key}\}`),
    );
  }
}
