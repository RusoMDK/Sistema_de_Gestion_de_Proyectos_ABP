import { PartialType } from '@nestjs/swagger';
import { CreateResourceDto } from './create-resource.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateResourceDto extends PartialType(CreateResourceDto) {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  description?: string;
}
