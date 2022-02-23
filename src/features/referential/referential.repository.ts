import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/core/repository/repository';
import { ReferentialParameter } from './entities/referential-parameter.entity';
import {
  Referential,
  ReferentialDocument,
} from './entities/referential.entity';

export class ReferentialRepository extends Repository<Referential> {
  constructor(
    @InjectModel(Referential.name)
    private ReferentialModel: Model<ReferentialDocument>,
  ) {
    super(ReferentialModel);
  }
}
