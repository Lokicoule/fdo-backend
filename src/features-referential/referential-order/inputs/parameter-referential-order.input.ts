import { InputType } from '@nestjs/graphql';
import { createKeyValueInput } from 'src/core/models/key-value/key-value.input';
import { ParameterReferentialEnum } from 'src/features-referential/core/enums/parameter-referential.enum';

const KeyValueInput = createKeyValueInput(ParameterReferentialEnum);
@InputType()
export class ParameterReferentialOrderInput extends KeyValueInput {}
