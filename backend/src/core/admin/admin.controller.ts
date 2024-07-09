import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Roles } from '../roles/decorator/roles.decorator';
import { RolesGuard } from '../auth/guard/roles.guard';
import { RoleName } from '../roles/enum/roles.enum';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('admin')
@UseGuards(RolesGuard)
export class AdminController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  @Roles(RoleName.ADMIN)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('users')
  @Roles(RoleName.ADMIN)
  findAllUsers() {
    return this.userService.findAll();
  }
}
