import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FdoProductsApplicationModule } from './fdo-products-application.module';

async function bootstrap() {
  const app = await NestFactory.create(FdoProductsApplicationModule);
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PRODUCTS_APPLICATION_HTTP_PORT'));
}
bootstrap();
