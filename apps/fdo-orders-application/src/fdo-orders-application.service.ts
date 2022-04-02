import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { SeederReferentialOrderService } from './modules/referential-order/business/seeder-referential-order.service';

@Injectable()
export class FdoOrdersApplicationService implements OnApplicationBootstrap {
  constructor(
    private readonly seederReferentialOrderService: SeederReferentialOrderService,
  ) {}

  async onApplicationBootstrap() {
    console.log('====================================');
    console.log('SeederReferentialOrder : START');
    console.log('====================================');
    console.log(
      await firstValueFrom(this.seederReferentialOrderService.init()),
    );
    console.log('====================================');
    console.log('SeederReferentialOrder : END');
    console.log('====================================');
  }
}
