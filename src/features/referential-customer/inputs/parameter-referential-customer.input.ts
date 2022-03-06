import { InputType } from '@nestjs/graphql';
import { createKeyValueInput } from 'src/core/models/key-value/key-value.input';
import { ParameterReferentialEnum } from 'src/features/referential/enums/parameter-referential.enum';

const KeyValueInput = createKeyValueInput(ParameterReferentialEnum);
@InputType()
export class ParameterReferentialCustomerInput extends KeyValueInput {}
