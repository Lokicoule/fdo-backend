import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { SeederReferentialCustomerService } from './modules/referential-customer/business/seeder-referential-customer.service';

@Injectable()
export class FdoCustomersApplicationService implements OnApplicationBootstrap {
  constructor(
    private readonly seederReferentialCustomerService: SeederReferentialCustomerService,
  ) {}

  async onApplicationBootstrap() {
    console.log('====================================');
    console.log('SeederReferentialCustomer : START');
    console.log('====================================');
    console.log(
      await firstValueFrom(this.seederReferentialCustomerService.init()),
    );
    console.log('====================================');
    console.log('SeederReferentialCustomer : END');
    console.log('====================================');
  }
}
