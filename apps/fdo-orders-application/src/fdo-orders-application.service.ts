import { Injectable } from '@nestjs/common';

@Injectable()
export class FdoOrdersApplicationService {
  getHello(): string {
    return 'Hello World!';
  }
}
