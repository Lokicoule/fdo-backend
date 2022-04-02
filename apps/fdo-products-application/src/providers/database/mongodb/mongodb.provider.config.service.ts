import { Inject, Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { MongoDBDatabaseProviderConfiguration } from './mongodb.provider.config';
import { ConfigType } from '@nestjs/config';

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
    console.log(this._config.uri);
    return {
      uri: this._config.uri,
    };
  }
}
