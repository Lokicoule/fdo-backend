import { createKeyValueEntity, ParameterReferentialEnum } from '@app/fdo-core';
import { ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';

const KeyValueEntity = createKeyValueEntity(ParameterReferentialEnum);

@Schema()
@ObjectType()
export class ParameterReferentialCustomer extends KeyValueEntity {}

export const ParameterReferentialCustomerSchema = SchemaFactory.createForClass(
  ParameterReferentialCustomer,
);
