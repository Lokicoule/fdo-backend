import { Field, InputType } from '@nestjs/graphql';
import { OrderCustomerInput } from './order-customer.input';
import { OrderItemInput } from './order-item.input';

@InputType()
export class CreateOrderInput {
  @Field(() => String, { nullable: true })
  readonly code: string;

  @Field(() => Date, { nullable: true })
  readonly billingDate: Date;

  @Field(() => Date, { nullable: true })
  readonly dueDate: Date;

  @Field(() => OrderCustomerInput)
  readonly customer: OrderCustomerInput;

  @Field(() => [OrderItemInput], { nullable: true })
  readonly items: OrderItemInput[];
}
