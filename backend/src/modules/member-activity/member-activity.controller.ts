import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { MemberActivityService } from './member-activity.service';
import { CreateMemberActivityDto } from './dto/create-member-activity.dto';
// import { UpdateMemberActivityDto } from './dto/update-member-activity.dto';
import { CustomAuthGuard } from 'src/core/auth/guard/auth.guard';
import { FindOptionsDto } from './dto/find-options.dto';

@Controller('member-activity')
export class MemberActivityController {
  constructor(private readonly memberActivityService: MemberActivityService) {}

  @Post()
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  create(@Body() createMemberActivityDto: CreateMemberActivityDto) {
    return this.memberActivityService.create(createMemberActivityDto);
  }

  @Get()
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  findAll(@Query() query?: FindOptionsDto) {
    return this.memberActivityService.findAll(query);
  }

  @Get(':id')
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  findOne(@Param('id') id: string, @Query() query?: FindOptionsDto) {
    return this.memberActivityService.findOne(id, query);
  }

  // @Patch(':id')
  // @UseGuards(CustomAuthGuard)
  // @UsePipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   }),
  // )
  // update(@Param('id') id: string, @Body() updateMemberActivityDto: UpdateMemberActivityDto) {
  //   return this.memberActivityService.update(+id, updateMemberActivityDto);
  // }

  @Delete(':id')
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  remove(@Param('id') id: string) {
    return this.memberActivityService.remove(id);
  }
}
