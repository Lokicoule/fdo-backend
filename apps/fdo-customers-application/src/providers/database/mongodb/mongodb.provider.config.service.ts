import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { MongoDBDatabaseProviderConfiguration } from './mongodb.provider.config';

@Injectable()
export class MongoDBDatabaseProviderConfigurationService
  implements MongooseOptionsFactory
{
  constructor(
    @Inject(MongoDBDatabaseProviderConfiguration.KEY)
    private _config: ConfigType<typeof MongoDBDatabaseProviderConfiguration>,
  ) {}

  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    return {
      uri: this._config.uri,
    };
  }
}
