import { Module } from '@nestjs/common';
import { ConfigurariModule } from './configurari/configurari.module';
import { UtilizatoriModule } from './utilizatori/utilizatori.module';
import { RezervariModule } from './rezervari/rezervari.module';
import { ManageriModule } from './manageri/manageri.module';

@Module({
  imports: [ConfigurariModule, UtilizatoriModule, RezervariModule, ManageriModule],
})
export class AppModule {}
