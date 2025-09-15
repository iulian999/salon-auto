import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigurariService } from './configurari.service';
import { ConfigurariController } from './configurari.controller';
import { ConfigurariPublicController } from './configurari-public.controller';
import { ConfigurariAdminController } from './configurari-admin.controller';
import { RolesMiddleware } from './roles.middleware';

@Module({
  controllers: [
    ConfigurariController,
    ConfigurariPublicController,
    ConfigurariAdminController,
  ],
  providers: [ConfigurariService],
})
export class ConfigurariModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RolesMiddleware)
      .forRoutes(ConfigurariAdminController); // middleware se aplică doar pe rutele Admin
  }
}
