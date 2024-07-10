import { PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  author_name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  start_date?: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  estimated_end_date?: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  end_date?: Date;
}
