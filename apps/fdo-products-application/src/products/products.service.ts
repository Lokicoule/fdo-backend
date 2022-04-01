import { Injectable } from '@nestjs/common';
import { defer, switchMap } from 'rxjs';
import { ProductsRepository } from './products.repository';
import { Product } from './entities/Product.entity';
import {
  generateCodeFromParamsUseCase,
  getUpdatedReferentialByCounterIncrementUseCase,
  retryWhenDuplicate,
  Service,
  UseCaseReferentialEnum,
} from '@app/fdo-core';
import { ReferentialProductService } from '../referential-product/referential-product.service';

@Injectable()
export class ProductsService extends Service<Product> {
  constructor(
    private readonly productRepository: ProductsRepository,
    private readonly referentialService: ReferentialProductService,
  ) {
    super(productRepository);
  }

  override create(payload: Product) {
    const { code } = payload;
    if (code) return this.productRepository.create(payload);

    return defer(() =>
      this.referentialService.findOne({
        useCase: UseCaseReferentialEnum.CODE_GENERATOR,
      }),
    ).pipe(
      switchMap((ProductReferential) =>
        this.referentialService.createOrUpdateCodeGenerator(
          getUpdatedReferentialByCounterIncrementUseCase(ProductReferential),
        ),
      ),
      switchMap((ProductReferential) =>
        this.productRepository.create({
          ...payload,
          code: generateCodeFromParamsUseCase(ProductReferential.parameters),
        }),
      ),
      retryWhenDuplicate(),
    );
  }
}
