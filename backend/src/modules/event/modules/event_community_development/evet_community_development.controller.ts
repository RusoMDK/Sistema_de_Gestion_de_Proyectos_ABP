import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { EvetCommunityDevelopmentService } from './evet_community_development.service';
import { CreateEvetCommunityDevelopmentDto } from './dto/create-evet_community_development.dto';
// import { UpdateEvetCommunityDevelopmentDto } from './dto/update-evet_community_development.dto';
import { CustomAuthGuard } from 'src/core/auth/guard/auth.guard';
import { FindOptionsDto } from './dto/find-options.dto';

@Controller('evet-community-development')
export class EvetCommunityDevelopmentController {
  constructor(
    private readonly evetCommunityDevelopmentService: EvetCommunityDevelopmentService,
  ) {}

  @Post()
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  create(
    @Body()
    createEvetCommunityDevelopmentDto: CreateEvetCommunityDevelopmentDto,
  ) {
    return this.evetCommunityDevelopmentService.create(
      createEvetCommunityDevelopmentDto,
    );
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
    return this.evetCommunityDevelopmentService.findAll(query);
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
    return this.evetCommunityDevelopmentService.findOne(id, query);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEvetCommunityDevelopmentDto: UpdateEvetCommunityDevelopmentDto) {
  //   return this.evetCommunityDevelopmentService.update(+id, updateEvetCommunityDevelopmentDto);
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
    return this.evetCommunityDevelopmentService.remove(id);
  }
}
