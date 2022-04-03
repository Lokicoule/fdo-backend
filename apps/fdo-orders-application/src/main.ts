import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FdoOrdersApplicationModule } from './fdo-orders-application.module';

async function bootstrap() {
  const app = await NestFactory.create(FdoOrdersApplicationModule);
  const configService = app.get(ConfigService);

  await app.listen(configService.get('ORDERS_APPLICATION_HTTP_PORT'));
}
bootstrap();
