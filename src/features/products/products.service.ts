import { Injectable } from '@nestjs/common';
import { defer, switchMap } from 'rxjs';
import { Service } from 'src/core/service';
import { ProductReferentialService } from '../product-referential/product-referential.service';
import { ProductsRepository } from './products.repository';
import {
  codeGenerationUseCase,
  counterParameterUseCase,
  retryWhenCodeAlreadyExist,
} from './products.usecases';
import { Product } from './entities/product.entity';
import { UseCaseEnum } from 'src/core/models/enums/usecase.enum';

@Injectable()
export class ProductsService extends Service<Product> {
  constructor(
    private readonly productRepository: ProductsRepository,
    private readonly referentialService: ProductReferentialService,
  ) {
    super(productRepository);
  }

  override create(payload: Partial<Product>) {
    const { code } = payload;
    if (code) return this.productRepository.create(payload);

    return defer(() =>
      this.referentialService.getProductReferential(UseCaseEnum.CODE_GENERATOR),
    ).pipe(
      switchMap((productReferential) =>
        this.referentialService.createOrUpdateProductCode(
          counterParameterUseCase(productReferential),
        ),
      ),
      switchMap((productReferential) =>
        this.productRepository.create({
          code: codeGenerationUseCase(productReferential.parameters),
          ...payload,
        }),
      ),
      retryWhenCodeAlreadyExist(5),
    );
  }
}
