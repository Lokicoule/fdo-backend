import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Order } from './order.entity';

@Schema({ _id: false })
@ObjectType()
/* @Directive('@extends')
@Directive('@key(fields: "_id")')
 */
export class Customer {
  @Field(() => ID, { name: 'id' })
  /*   @Directive('@external')
   */
  _id: string;

  @Field(() => [Order])
  orders: Order[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
