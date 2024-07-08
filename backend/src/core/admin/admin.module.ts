import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role, User } from '../models/public';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  controllers: [AdminController],
  providers: [UserService],
})
export class AdminModule {}
