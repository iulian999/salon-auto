import { Module } from '@nestjs/common';
import { ManageriController } from './manageri.controller';
import { ManageriService } from './manageri.service';

@Module({
  controllers: [ManageriController],
  providers: [ManageriService]
})
export class ManageriModule {}
