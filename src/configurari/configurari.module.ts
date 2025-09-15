import { Module } from '@nestjs/common';
import { ConfigurariService } from './configurari.service';
import { ConfigurariController } from './configurari.controller';

@Module({
  controllers: [ConfigurariController],
  providers: [ConfigurariService],
})
export class ConfigurariModule {}
