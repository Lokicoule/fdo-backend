import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    NestGraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'customers', url: 'http://localhost:3000/graphql' },
            { name: 'products', url: 'http://localhost:3003/graphql' },
          ],
        }),
      },
    }),
  ],
})
export class ApolloGraphQLProviderModule {}
