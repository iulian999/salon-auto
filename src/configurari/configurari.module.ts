import { Module } from '@nestjs/common';
import { ConfigurariService } from './configurari.service';
import { ConfigurariController } from './configurari.controller';
import { ConfigurariPublicController } from './configurari-public.controller';
import { ConfigurariAdminController } from './configurari-admin.controller';

@Module({
  controllers: [
    ConfigurariController,
    ConfigurariPublicController,
    ConfigurariAdminController,
  ],
  providers: [ConfigurariService],
})
export class ConfigurariModule {}
