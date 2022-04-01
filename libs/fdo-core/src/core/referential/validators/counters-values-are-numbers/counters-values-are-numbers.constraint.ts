import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ParameterType } from '../../types/referentialType';
import { expectCounterParamsAsNumbers } from '../../use-cases/expect-counter-params-as-numbers/expect-counter-params-as-numbers';

@ValidatorConstraint({ name: 'countersValuesAreNumbers' })
@Injectable()
export class CountersValuesAreNumbersConstraint<T extends ParameterType>
  implements ValidatorConstraintInterface
{
  validate(parameters: T[]): boolean {
    return expectCounterParamsAsNumbers(parameters);
  }

  defaultMessage() {
    return `Counter can only contain digit.`;
  }
}
