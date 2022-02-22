import { registerAs } from '@nestjs/config';

export const MONGOOSE_CONFIG_KEY = 'MONGOOSE_CONFIG_KEY';

export const MongooseConfig = registerAs('MONGOOSE_CONFIG_KEY', () => ({
  uri: process.env.MONGO_DB_CONNECTION_STRING,
}));
