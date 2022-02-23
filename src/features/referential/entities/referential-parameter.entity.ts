import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Parameter } from 'src/core/models/parameter.entity';
import { UseCaseParameterAllowed } from '../enums/usecase.enum';

@Schema({ _id: false })
@ObjectType()
export class ReferentialParameter extends Parameter {
  @Field(() => UseCaseParameterAllowed, { nullable: true })
  @Prop()
  useCase: UseCaseParameterAllowed;
}

//export type ParameterDocument = Parameter & Document;
export const ReferentialParameterSchema =
  SchemaFactory.createForClass(ReferentialParameter);
