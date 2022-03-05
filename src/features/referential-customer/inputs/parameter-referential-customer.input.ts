import { InputType } from '@nestjs/graphql';
import { KeyValueInput } from 'src/core/models/key-value/key-value.input';
import { ParameterReferentialEnum } from 'src/features/referential/enums/parameter-referential.enum';

@InputType()
export class ParameterReferentialCustomerInput extends KeyValueInput(
  ParameterReferentialEnum,
) {}
