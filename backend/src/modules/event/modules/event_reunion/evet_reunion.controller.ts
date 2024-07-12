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
import { EvetReunionService } from './evet_reunion.service';
import { CreateEvetReunionDto } from './dto/create-evet_reunion.dto';
// import { UpdateEvetReunionDto } from './dto/update-evet_reunion.dto';
import { CustomAuthGuard } from 'src/core/auth/guard/auth.guard';
import { FindOptionsDto } from './dto/find-options.dto';

@Controller('evet-reunion')
export class EvetReunionController {
  constructor(private readonly evetReunionService: EvetReunionService) {}

  @Post()
  @UseGuards(CustomAuthGuard)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  create(@Body() createEvetReunionDto: CreateEvetReunionDto) {
    return this.evetReunionService.create(createEvetReunionDto);
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
    return this.evetReunionService.findAll(query);
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
    return this.evetReunionService.findOne(id, query);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEvetReunionDto: UpdateEvetReunionDto) {
  //   return this.evetReunionService.update(+id, updateEvetReunionDto);
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
    return this.evetReunionService.remove(id);
  }
}
