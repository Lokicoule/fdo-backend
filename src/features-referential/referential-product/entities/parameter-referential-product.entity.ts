import { ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { createKeyValueEntity } from 'src/core/models/key-value/key-value.entity';
import { ParameterReferentialEnum } from 'src/features-referential/core/enums/parameter-referential.enum';

const KeyValueEntity = createKeyValueEntity(ParameterReferentialEnum);

@Schema({ _id: false })
@ObjectType()
export class ParameterReferentialProduct extends KeyValueEntity {}

export const ParameterReferentialProductSchema = SchemaFactory.createForClass(
  ParameterReferentialProduct,
);
