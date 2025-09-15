import { Controller, Get } from '@nestjs/common';
import { ConfigurariService } from './configurari.service';

@Controller('configurari')
export class ConfigurariController {
  constructor(private readonly configurariService: ConfigurariService) {}

  @Get('list')
  getAll() {
    return this.configurariService.findAll();
  }
}
