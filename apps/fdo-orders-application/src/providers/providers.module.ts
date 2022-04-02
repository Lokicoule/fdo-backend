import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoDBDatabaseProviderModule } from './database/mongodb/mongodb.provider.module';
import { ApolloGraphQLProviderModule } from './graphql/apollo/apollo.provider.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.prod'],
    }),
    ApolloGraphQLProviderModule,
    MongoDBDatabaseProviderModule,
  ],
})
export class ProvidersModule {}
