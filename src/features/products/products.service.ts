import { Injectable } from '@nestjs/common';
import { defer, switchMap } from 'rxjs';
import { Service } from 'src/core/service';
import { retryWhenDuplicate } from '../../core/helpers/observer.helper';
import { ReferentialProductService } from '../../features-referential/referential-product/referential-product.service';
import { UseCaseReferentialEnum } from '../../features-referential/core/enums/usecase-referential.enum';
import { generateCodeFromParamsUseCase } from '../../features-referential/core/use-cases/generate-code-from-params/generate-code-from-params';
import { getIncrementedCounterParamUseCase } from '../../features-referential/core/use-cases/get-incremented-counter-param/get-incremented-counter-param';
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

  override create(payload: Partial<Product>) {
    const { code } = payload;
    if (code) return this.productRepository.create(payload);

    return defer(() =>
      this.referentialService.findOne({
        useCase: UseCaseReferentialEnum.CODE_GENERATOR,
      }),
    ).pipe(
      switchMap((ProductReferential) =>
        this.referentialService.createOrUpdateCodeGenerator(
          getIncrementedCounterParamUseCase(ProductReferential),
        ),
      ),
      switchMap((ProductReferential) =>
        this.productRepository.create({
          code: generateCodeFromParamsUseCase(ProductReferential.parameters),
          ...payload,
        }),
      ),
      retryWhenDuplicate(),
    );
  }
}
