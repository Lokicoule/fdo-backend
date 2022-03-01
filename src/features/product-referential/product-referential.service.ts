import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { NestedPartial } from 'src/core/types/partial.types';
import { ProductReferentialRepository } from './product-referential.repository';
import {
  ProductReferential,
  ProductReferentialDocument,
} from './entities/product-referential.entity';
import { KeyValue } from 'src/core/models/key-value/key-value.entity';
import { UseCaseEnum } from 'src/core/models/enums/usecase.enum';

@Injectable()
export class ProductReferentialService {
  constructor(private readonly repository: ProductReferentialRepository) {}

  createOrUpdateProductCode(payload: NestedPartial<ProductReferential>) {
    return this.createOrUpdateProductReferential(
      UseCaseEnum.CODE_GENERATOR,
      payload,
    );
  }

  createOrUpdateProductReferential(
    useCase: UseCaseEnum,
    payload: NestedPartial<ProductReferential>,
  ) {
    return this.repository.createOrUpdate(
      {
        useCase,
      },
      payload,
    );
  }

  getProductReferential(useCase: UseCaseEnum) {
    return this.repository.findOne({
      useCase,
    });
  }

  populateParameters(
    document: ProductReferentialDocument,
  ): Observable<KeyValue[]> {
    return this.repository.populate<KeyValue[]>(
      document,
      'parameters',
      KeyValue.name,
      (referential: ProductReferential) => referential.parameters,
    );
  }
}
