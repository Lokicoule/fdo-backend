import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GraphQLModule } from './graphql/graphql.module';
import { MongooseModule } from './mongoose/mongoose.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.prod'],
    }),
    GraphQLModule,
    MongooseModule,
  ],
})
export class ConfigurationsModule {}
