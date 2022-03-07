import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ParameterReferentialEnum } from '../../enums/parameter-referential.enum';
import { ParameterType } from '../../types/referentialType';

@ValidatorConstraint({ name: 'countersValuesAreNumbers' })
@Injectable()
export class CountersValuesAreNumbersConstraint<T extends ParameterType>
  implements ValidatorConstraintInterface
{
  validate(parameters: T[]): boolean {
    const counters = parameters.filter(
      (param) =>
        param?.key.toUpperCase() ===
        ParameterReferentialEnum.COUNTER.toUpperCase(),
    );
    return counters.every((counter) => /^\d+$/.test(counter.value));
  }

  defaultMessage() {
    return `Counter can only contain digit.`;
  }
}
