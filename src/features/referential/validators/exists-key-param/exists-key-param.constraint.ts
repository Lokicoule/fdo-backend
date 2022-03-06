import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ParameterType } from '../../types/referentialType';

@ValidatorConstraint({ name: 'ExistsKeyParam' })
@Injectable()
export class ExistsKeyParamConstraint<T extends ParameterType>
  implements ValidatorConstraintInterface
{
  validate(parameters: T[], args: ValidationArguments): boolean {
    return args?.constraints.every((useCase) =>
      parameters?.some(
        (param) => param?.key?.toUpperCase() === useCase.toUpperCase(),
      ),
    );
  }
}
