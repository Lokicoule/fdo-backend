import { ReferentialService } from '@app/fdo-core';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ParameterReferentialProduct } from './entities/parameter-referential-product.entity';
import {
  ReferentialProduct,
  ReferentialProductDocument,
} from './entities/referential-product.entity';
import { ReferentialProductRepository } from './referential-product.repository';

@Injectable()
export class ReferentialProductService extends ReferentialService<ReferentialProduct> {
  constructor(
    private readonly referentialProductRepository: ReferentialProductRepository,
  ) {
    super(referentialProductRepository);
  }

  populateParameters(
    document: ReferentialProductDocument,
  ): Observable<ParameterReferentialProduct[]> {
    return this.referentialProductRepository.populate<
      ParameterReferentialProduct[]
    >(
      document,
      'parameters',
      ParameterReferentialProduct.name,
      (referential: ReferentialProduct) => referential.parameters,
    );
  }
}
