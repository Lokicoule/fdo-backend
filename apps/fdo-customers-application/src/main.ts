import { NestFactory } from '@nestjs/core';
import { FdoCustomersApplicationModule } from './fdo-customers-application.module';

async function bootstrap() {
  const app = await NestFactory.create(FdoCustomersApplicationModule);
  await app.listen(3000);
}
bootstrap();
