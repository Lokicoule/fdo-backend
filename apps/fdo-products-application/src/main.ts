import { NestFactory } from '@nestjs/core';
import { FdoProductsApplicationModule } from './fdo-products-application.module';

async function bootstrap() {
  const app = await NestFactory.create(FdoProductsApplicationModule);
  await app.listen(3003);
}
bootstrap();
