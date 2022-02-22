import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule as NestMongooseModule } from '@nestjs/mongoose';
import { MongooseConfig } from './mongoose.config';
import { MongooseConfigService } from './mongoose-config.service';

@Module({
  imports: [
    NestMongooseModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          load: [MongooseConfig],
        }),
      ],
      useClass: MongooseConfigService,
      inject: [MongooseConfig.KEY],
    }),
  ],
})
export class MongooseModule {}
