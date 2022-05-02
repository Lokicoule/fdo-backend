import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      sortSchema: true,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      playground: true,
    }),
  ],
})
export class ApolloGraphQLProviderModule {}
