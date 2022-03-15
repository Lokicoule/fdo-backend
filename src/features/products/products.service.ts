import { Injectable } from '@nestjs/common';
import { defer, switchMap } from 'rxjs';
import { Service } from 'src/core/service';
import { retryWhenDuplicate } from '../../core/helpers/observer.helper';
import { ReferentialProductService } from '../../features-referential/referential-product/referential-product.service';
import { UseCaseReferentialEnum } from '../../features-referential/core/enums/usecase-referential.enum';
import { generateCodeFromParamsUseCase } from '../../features-referential/core/use-cases/generate-code-from-params/generate-code-from-params';
import { getUpdatedReferentialByCounterIncrementUseCase } from '../../features-referential/core/use-cases/get-incremented-counter-param/get-updated-referential-by-counter-increment';
import { ProductsRepository } from './products.repository';
import { Product } from './entities/Product.entity';

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
