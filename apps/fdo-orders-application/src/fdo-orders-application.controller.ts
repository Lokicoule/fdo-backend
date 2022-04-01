import { Controller, Get } from '@nestjs/common';
import { FdoOrdersApplicationService } from './fdo-orders-application.service';

@Controller()
export class FdoOrdersApplicationController {
  constructor(private readonly fdoOrdersApplicationService: FdoOrdersApplicationService) {}

  @Get()
  getHello(): string {
    return this.fdoOrdersApplicationService.getHello();
  }
}
