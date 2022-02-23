import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ReferentialParameterInput } from '../dtos/referential-parameter.input';
import { UseCaseParameterAllowed } from '../enums/usecase.enum';

@ValidatorConstraint({ name: 'UseCaseCounter' })
@Injectable()
export class UseCaseCounterConstraint implements ValidatorConstraintInterface {
  validate(parameters: ReferentialParameterInput[]): boolean {
    const counters = parameters.filter(
      (param) =>
        param?.useCase?.toUpperCase() ===
        UseCaseParameterAllowed.COUNTER.toUpperCase(),
    );
    return counters.every((counter) => /^\d+$/.test(counter.value));
  }

  defaultMessage(args: ValidationArguments) {
    return `Counter can only contain digit.`;
  }
}
