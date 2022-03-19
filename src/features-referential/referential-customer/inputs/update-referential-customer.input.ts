import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateReferentialCustomerInput } from './create-referential-customer.input';

@InputType()
export class UpdateReferentialCustomerInput extends PartialType(
  CreateReferentialCustomerInput,
) {}
