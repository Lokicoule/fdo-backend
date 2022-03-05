import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { KeyValue } from 'src/core/models/key-value/key-value.entity';
import { ParameterReferentialEnum } from '../referential/enums/parameter-referential.enum';
import { ReferentialService } from '../referential/service';
import { ReferentialProductRepository } from './referential-product.repository';
import {
  ReferentialProduct,
  ReferentialProductDocument,
} from './entities/referential-product.entity';

@Injectable()
export class ReferentialProductService extends ReferentialService<ReferentialProduct> {
  constructor(
    private readonly referentialProductRepository: ReferentialProductRepository,
  ) {
    super(referentialProductRepository);
  }

  populateParameters(
    document: ReferentialProductDocument,
  ): Observable<KeyValue<ParameterReferentialEnum>[]> {
    return this.referentialProductRepository.populate<
      KeyValue<ParameterReferentialEnum>[]
    >(
      document,
      'parameters',
      KeyValue.name,
      (referential: ReferentialProduct) => referential.parameters,
    );
  }
}
