import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Lista toate configurările (Nivel 5)
  @Get('configurari/list')
  getAll() {
    return this.appService.findAll();
  }

  // Detalii configurare după id (Nivel 6)
  @Get('configurari/details/:id')
  getById(@Param('id') id: string) {
    return this.appService.findById(+id);
  }

  // Căutare cu query params (Nivel 8)
  @Get('configurari/search')
  search(
    @Query('model') model: string,
    @Query('minPrice') minPrice: string,
    @Query('maxPrice') maxPrice: string
  ) {
    return this.appService.search(model, +minPrice, +maxPrice);
  }
}
