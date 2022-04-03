import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FdoCustomersApplicationModule } from './fdo-customers-application.module';

async function bootstrap() {
  const app = await NestFactory.create(FdoCustomersApplicationModule);
  const configService = app.get(ConfigService);

  await app.listen(configService.get('FDO_CUSTOMERS_HTTP_PORT'));
}
bootstrap();
