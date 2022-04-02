import { Module } from '@nestjs/common';
import { FdoProductsApplicationService } from './fdo-products-application.service';
import { ProductsModule } from './modules/products/products.module';
import { ReferentialProductModule } from './modules/referential-product/referential-product.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [ProvidersModule, ProductsModule, ReferentialProductModule],
  providers: [FdoProductsApplicationService],
})
export class FdoProductsApplicationModule {}
