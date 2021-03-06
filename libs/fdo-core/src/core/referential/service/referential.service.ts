import { Injectable } from '@nestjs/common';
import { GqlEntity } from '../../models';
import { IRepository } from '../../repository';
import { Service } from '../../service';
import { UseCaseReferentialEnum } from '../enums/usecase-referential.enum';
import { ReferentialType } from '../types/referentialType';
import { IReferentialService } from './referential.service.interface';

@Injectable()
export abstract class ReferentialService<T extends GqlEntity & ReferentialType>
  extends Service<T>
  implements IReferentialService<T>
{
  protected constructor(
    private readonly referentialRepository: IRepository<T>,
  ) {
    super(referentialRepository);
  }

  createOrUpdateCodeGenerator(payload: T) {
    return this.createOrUpdateReferential(
      UseCaseReferentialEnum.CODE_GENERATOR,
      payload,
    );
  }

  createOrUpdateReferential(useCase: UseCaseReferentialEnum, payload: T) {
    return this.referentialRepository.createOrUpdate(
      {
        useCase,
      },
      payload,
    );
  }
}
