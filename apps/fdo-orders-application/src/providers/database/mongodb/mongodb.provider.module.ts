import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDBDatabaseProviderConfiguration } from './mongodb.provider.config';
import { MongoDBDatabaseProviderConfigurationService } from './mongodb.provider.config.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          load: [MongoDBDatabaseProviderConfiguration],
        }),
      ],
      useClass: MongoDBDatabaseProviderConfigurationService,
      inject: [MongoDBDatabaseProviderConfiguration.KEY],
    }),
  ],
})
export class MongoDBDatabaseProviderModule {}
