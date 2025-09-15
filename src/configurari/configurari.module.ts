import { Module } from '@nestjs/common';
import { ConfigurariController } from './configurari.controller';
import { ConfigurariService } from './configurari.service';

@Module({
  controllers: [ConfigurariController],
  providers: [ConfigurariService],
})
export class ConfigurariModule {}
