import { Module } from '@nestjs/common';
import { UtilizatoriController } from './utilizatori.controller';
import { UtilizatoriService } from './utilizatori.service';

@Module({
  controllers: [UtilizatoriController],
  providers: [UtilizatoriService]
})
export class UtilizatoriModule {}
