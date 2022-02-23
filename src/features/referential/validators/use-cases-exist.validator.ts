import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ReferentialParameterInput } from '../dtos/referential-parameter.input';

@ValidatorConstraint({ name: 'UseCaseExists' })
@Injectable()
export class UseCasesExistConstraint implements ValidatorConstraintInterface {
  validate(
    parameters: ReferentialParameterInput[],
    args: ValidationArguments,
  ): boolean {
    return args?.constraints.every((useCase) =>
      parameters?.some(
        (param) => param?.useCase?.toUpperCase() === useCase.toUpperCase(),
      ),
    );
  }
}
