import { Field, InputType } from '@nestjs/graphql';
import { ParameterEnum } from '../enums/parameter.enum';

@InputType()
export class KeyValueInput {
  @Field(() => ParameterEnum)
  key: ParameterEnum;

  @Field(() => String)
  value: string;
}
