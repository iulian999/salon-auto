import { Controller, Get, Param, Query } from '@nestjs/common';
import { ConfigurariService } from './configurari.service';
import { UppercasePipe } from './uppercase.pipe';

@Controller('configurari')
export class ConfigurariController {
  constructor(private readonly configurariService: ConfigurariService) {}

  // Lista completă
  @Get('list')
  findAll() {
    return this.configurariService.findAll();
  }

  // Detalii după id
  @Get('details/:id')
  findOne(@Param('id') id: string) {
    return this.configurariService.findOne(+id);
  }

  // Search după query params
  @Get('search')
  search(
    @Query('model') model: string,
    @Query('minPrice') minPrice: string,
    @Query('maxPrice') maxPrice: string
  ) {
    return this.configurariService.search(model, +minPrice, +maxPrice);
  }

  // Search după nume cu pipe Uppercase (sarcina suplimentară)
  @Get('search-by-name')
  searchByName(@Query('name', UppercasePipe) name: string) {
    return this.configurariService.searchByName(name);
  }
}
