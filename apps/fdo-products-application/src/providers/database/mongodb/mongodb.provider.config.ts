import { registerAs } from '@nestjs/config';

export const MONGO_DB_CONFIG_KEY = 'MONGO_DB_CONFIG_KEY';

export const MongoDBDatabaseProviderConfiguration = registerAs(
  MONGO_DB_CONFIG_KEY,
  () => ({
    uri: process.env.PRODUCTS_APPLICATION_DATABASE_MONGO_DB_URI,
  }),
);
