import { Controller, Get, Param } from '@nestjs/common';
import { UppercasePipe } from '../configurari/uppercase.pipe';

@Controller('users')
export class UsersController {

  @Get('name/:name')
  getName(@Param('name', UppercasePipe) name: string) {
    return `Numele după transformare: ${name}`;
  }
}
