import { Module } from '@nestjs/common';
import { ConfigurationsModule } from './configurations/configurations.module';
import { ProductsModule } from './products/products.module';
import { ReferentialProductModule } from './referential-product/referential-product.module';

@Module({
  imports: [ConfigurationsModule, ProductsModule, ReferentialProductModule],
})
export class FdoProductsApplicationModule {}
