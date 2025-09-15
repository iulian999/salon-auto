import { Controller, Get, Param, Query } from '@nestjs/common';
import { ConfigurariService } from './configurari.service';

@Controller('configurari')
export class ConfigurariController {
  constructor(private readonly configurariService: ConfigurariService) {}

  // Nivel 5: listă completă
  @Get('list')
  findAll() {
    return this.configurariService.findAll();
  }

  // Nivel 6: detalii după id
  @Get('details/:id')
  findOne(@Param('id') id: string) {
    return this.configurariService.findOne(+id);
  }

  // Nivel 8: search cu query params
  @Get('search')
  search(
    @Query('model') model: string,
    @Query('minPrice') minPrice: string,
    @Query('maxPrice') maxPrice: string
  ) {
    return this.configurariService.search(model, +minPrice, +maxPrice);
  }
}
