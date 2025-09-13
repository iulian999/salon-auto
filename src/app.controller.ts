import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('configurari')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Nivel 5: lista toate configurările
  @Get('list')
  getAll() {
    return this.appService.findAll();
  }

  // Nivel 6: detalii configurare după id, cu 404 dacă nu există
  @Get('details/:id')
  getById(@Param('id') id: string) {
    const config = this.appService.findById(+id);
    if (!config) {
      throw new NotFoundException('Configurare nu există');
    }
    return config;
  }
}
