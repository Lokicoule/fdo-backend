import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { SeederReferentialProductService } from './modules/referential-product/business/seeder-referential-product.service';

@Injectable()
export class FdoProductsApplicationService implements OnApplicationBootstrap {
  constructor(
    private readonly seederReferentialProductService: SeederReferentialProductService,
  ) {}

  async onApplicationBootstrap() {
    console.log('====================================');
    console.log('SeederReferentialProduct : START');
    console.log('====================================');
    console.log(
      await firstValueFrom(this.seederReferentialProductService.init()),
    );
    console.log('====================================');
    console.log('SeederReferentialProduct : END');
    console.log('====================================');
  }
}
