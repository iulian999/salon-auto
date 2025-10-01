import { Controller, Get, Param } from '@nestjs/common';
import { UppercasePipe } from './uppercase.pipe';

@Controller('users')
export class UsersController {

  @Get('name/:name')
  logName(@Param('name', UppercasePipe) name: string) {
    // name va fi automat transformat în majuscule
    return `Numele după transformare: ${name}`;
  }
}
