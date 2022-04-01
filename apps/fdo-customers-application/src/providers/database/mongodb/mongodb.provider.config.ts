import { registerAs } from '@nestjs/config';

export const MONGO_DB_CONFIG_KEY = 'MONGO_DB_CONFIG_KEY';

export const MongoDBDatabaseProviderConfiguration = registerAs(
  MONGO_DB_CONFIG_KEY,
  () => ({
    uri: process.env.MONGO_DB_CUSTOMERS_CONNECTION_STRING,
  }),
);
