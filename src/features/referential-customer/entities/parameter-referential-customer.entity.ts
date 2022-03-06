import { ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { createKeyValueEntity } from 'src/core/models/key-value/key-value.entity';
import { ParameterReferentialEnum } from 'src/features/referential/enums/parameter-referential.enum';

const KeyValueEntity = createKeyValueEntity(ParameterReferentialEnum);

@Schema({ _id: false })
@ObjectType()
export class ParameterReferentialCustomer extends KeyValueEntity {}

export const ParameterReferentialCustomerSchema = SchemaFactory.createForClass(
  ParameterReferentialCustomer,
);
