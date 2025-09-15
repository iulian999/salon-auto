import { Module } from '@nestjs/common';
import { RezervariController } from './rezervari.controller';
import { RezervariService } from './rezervari.service';

@Module({
  controllers: [RezervariController],
  providers: [RezervariService]
})
export class RezervariModule {}
