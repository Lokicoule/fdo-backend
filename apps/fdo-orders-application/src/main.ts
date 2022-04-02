import { NestFactory } from '@nestjs/core';
import { FdoOrdersApplicationModule } from './fdo-orders-application.module';

async function bootstrap() {
  const app = await NestFactory.create(FdoOrdersApplicationModule);
  await app.listen(3001);
}
bootstrap();
