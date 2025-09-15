import { Controller, Get, Param } from '@nestjs/common';

@Controller('admin/configurari')
export class ConfigurariAdminController {
  @Get('edit/:id')
  edit(@Param('id') id: string) {
    return `Edit configurare ${id}`;
  }
}
