import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [ConfigModule, FeaturesModule],
})
export class AppModule {}
