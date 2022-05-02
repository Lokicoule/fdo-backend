import { createKeyValueInput, ParameterReferentialEnum } from '@app/fdo-core';
import { InputType } from '@nestjs/graphql';

const KeyValueInput = createKeyValueInput(ParameterReferentialEnum);
@InputType()
export class CreateParameterReferentialCustomerInput extends KeyValueInput {}
