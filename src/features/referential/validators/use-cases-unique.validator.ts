import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ReferentialParameterInput } from '../dtos/referential-parameter.input';

@ValidatorConstraint({ name: 'UseCasesUnique' })
@Injectable()
export class UseCasesUniqueConstraint implements ValidatorConstraintInterface {
  /**
   *
   * @param parameters
   * @returns
   */
  validate(
    parameters: ReferentialParameterInput[],
    args: ValidationArguments,
  ): boolean {
    /* return (
      parameters.filter(
        (param) =>
          param.useCase ===
          UseCaseParameterAllowed.LITERAL_EXPRESSION.toUpperCase(),
      ).length <= 1
    ); */
    return args?.constraints.every(
      (useCase) =>
        parameters?.filter(
          (param) => param?.useCase?.toUpperCase() === useCase.toUpperCase(),
        ).length <= 1,
    );
  }
}
