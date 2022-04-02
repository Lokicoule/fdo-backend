import { InputType, PartialType } from '@nestjs/graphql';
import { CreateOrderInput } from './create-order.input';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {}
