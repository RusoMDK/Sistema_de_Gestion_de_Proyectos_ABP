import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { Member, Project } from 'src/core/models/public';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Member, Project])],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
