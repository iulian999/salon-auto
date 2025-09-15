import { Module } from '@nestjs/common';
import { ConfigurariModule } from './configurari/configurari.module';

@Module({
  imports: [ConfigurariModule],
})
export class AppModule {}
