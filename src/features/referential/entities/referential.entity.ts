import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GqlEntity } from 'src/core/models/gql-entity';
import {
  ReferentialParameter,
  ReferentialParameterSchema,
} from './referential-parameter.entity';

@Schema({ timestamps: true })
@ObjectType()
export class Referential extends GqlEntity {
  @Field(() => String)
  @Prop({ type: String, required: true, uppercase: true, unique: true })
  code: string;

  @Field(() => [ReferentialParameter], { nullable: true })
  @Prop({
    type: [ReferentialParameterSchema],
  })
  parameters: ReferentialParameter[];
}

export type ReferentialDocument = Referential & Document;
export const ReferentialSchema = SchemaFactory.createForClass(Referential);
