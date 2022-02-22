import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { GraphQLModule } from './graphql/graphql.module';
import { MongooseModule } from './mongoose/mongoose.module';

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.prod'],
    }),
    MongooseModule,
    GraphQLModule,
  ],
})
export class ConfigModule {}
