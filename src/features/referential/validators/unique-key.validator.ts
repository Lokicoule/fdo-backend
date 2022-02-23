import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ReferentialParameterInput } from '../dtos/referential-parameter.input';

@ValidatorConstraint({ name: 'UniqueKey' })
@Injectable()
export class UniqueKeyConstraint implements ValidatorConstraintInterface {
  /**
   *
   * @param parameters
   * @returns
   */
  validate(parameters: ReferentialParameterInput[]): boolean {
    return (
      new Set(parameters.map((param) => param.key)).size === parameters.length
    );
  }
}
