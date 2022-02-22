import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    NestGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      playground: true,
      debug: true,
      introspection: true,
      formatError: (error) => {
        return {
          code: error.extensions && error.extensions.code,
          message: error.message,
          locations: error.locations,
          path: error.path,
        };
      },
    }),
  ],
})
export class GraphQLModule {}
