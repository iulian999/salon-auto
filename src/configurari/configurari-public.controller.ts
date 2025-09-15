import { Controller, Get } from '@nestjs/common';
import { ConfigurariService } from './configurari.service';

@Controller('public/configurari')
export class ConfigurariPublicController {
  constructor(private readonly configurariService: ConfigurariService) {}

  @Get('list')
  list() {
    return this.configurariService.findAll();
  }
}
