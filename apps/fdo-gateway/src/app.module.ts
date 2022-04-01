import { Module } from '@nestjs/common';
import { ConfigurationsModule } from './configurations/configurations.module';

@Module({
  imports: [ConfigurationsModule],
})
export class AppModule {}
