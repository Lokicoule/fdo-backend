import { Module } from '@nestjs/common';
import { FdoOrdersApplicationController } from './fdo-orders-application.controller';
import { FdoOrdersApplicationService } from './fdo-orders-application.service';

@Module({
  imports: [],
  controllers: [FdoOrdersApplicationController],
  providers: [FdoOrdersApplicationService],
})
export class FdoOrdersApplicationModule {}
