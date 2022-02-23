import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ReferentialParameterInput } from '../dtos/referential-parameter.input';
import { UseCaseParameterAllowed } from '../enums/usecase.enum';

@ValidatorConstraint({ name: 'UseCaseYear' })
@Injectable()
export class UseCaseYearConstraint implements ValidatorConstraintInterface {
  validate(parameters: ReferentialParameterInput[]): boolean {
    const years = parameters.filter(
      (param) =>
        param?.useCase?.toUpperCase() ===
        UseCaseParameterAllowed.YEAR.toUpperCase(),
    );
    return years.every((counter) => /^20[0-9]\d$/.test(counter.value));
  }

  defaultMessage(args: ValidationArguments) {
    return `Year can only contain 4 digit between 2000 and 2099.`;
  }
}
