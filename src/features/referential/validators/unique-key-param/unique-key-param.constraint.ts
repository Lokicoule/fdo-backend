import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ParameterType } from '../../types/referentialType';

@ValidatorConstraint({ name: 'UniqueKeyParam' })
@Injectable()
export class UniqueKeyParamConstraint<T extends ParameterType>
  implements ValidatorConstraintInterface
{
  validate(parameters: T[]): boolean {
    return (
      new Set(parameters.map((param) => param.key)).size === parameters.length
    );
  }
}
