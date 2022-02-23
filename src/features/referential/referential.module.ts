import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferentialRepository } from './referential.repository';
import { ReferentialResolver } from './referential.resolver';
import { ReferentialService } from './referential.service';
import { Referential, ReferentialSchema } from './entities/referential.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Referential.name, schema: ReferentialSchema },
    ]),
  ],
  providers: [ReferentialResolver, ReferentialService, ReferentialRepository],
  exports: [ReferentialService],
})
export class ReferentialModule {}
