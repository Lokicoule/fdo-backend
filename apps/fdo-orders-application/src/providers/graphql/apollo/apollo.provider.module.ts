import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { Customer } from '../../../modules/orders/entities/customer.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
      sortSchema: true,
      playground: true,
      introspection: true,
      /*  buildSchemaOptions: {
        orphanedTypes: [Customer],
      }, */
    }),
  ],
})
export class ApolloGraphQLProviderModule {}
