import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GqlEntity } from 'src/core/models/entity/entity.graphql';
import {
  KeyValue,
  KeyValueSchema,
} from 'src/core/models/key-value/key-value.entity';
import { ParameterReferentialEnum } from 'src/features/referential/enums/parameter-referential.enum';
import { UseCaseReferentialEnum } from 'src/features/referential/enums/usecase-referential.enum';

@Schema({ timestamps: true })
@ObjectType()
export class ReferentialProduct extends GqlEntity {
  @Field(() => UseCaseReferentialEnum)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  useCase: UseCaseReferentialEnum;

  @Field(() => [KeyValue], { nullable: true })
  @Prop({
    type: [KeyValueSchema],
  })
  parameters: KeyValue<ParameterReferentialEnum>[];
}

export const ReferentialProductName = 'referential_product';

export type ReferentialProductDocument = ReferentialProduct & Document;
export const ReferentialProductSchema =
  SchemaFactory.createForClass(ReferentialProduct);
