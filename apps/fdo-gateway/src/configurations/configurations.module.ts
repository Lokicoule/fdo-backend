import { Module } from '@nestjs/common';
/* import { ConfigModule  } from '@nestjs/config';
 */
import { GraphQLModule } from './graphql/graphql.module';

@Module({
  imports: [
    /*     NestConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.prod'],
    }), */
    GraphQLModule,
  ],
})
export class ConfigurationsModule {}
