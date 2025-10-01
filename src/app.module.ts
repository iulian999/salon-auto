import { Module } from '@nestjs/common';
import { ConfigurariModule } from './configurari/configurari.module';
import { UtilizatoriModule } from './utilizatori/utilizatori.module';
import { RezervariModule } from './rezervari/rezervari.module';
import { ManageriModule } from './manageri/manageri.module';
import { UsersModule } from './users/users.module'; // <-- pune această linie aici

@Module({
  imports: [
    ConfigurariModule,
    UtilizatoriModule,
    RezervariModule,
    ManageriModule,
    UsersModule, // <-- și aici în array-ul imports
  ],
})
export class AppModule {}
