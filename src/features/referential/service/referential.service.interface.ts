import { UseCaseReferentialEnum } from '../enums/usecase-referential.enum';

export interface IReferentialService<T> {
  createOrUpdateCodeGenerator(payload: T);
  createOrUpdateReferential(useCase: UseCaseReferentialEnum, payload: T);
}
