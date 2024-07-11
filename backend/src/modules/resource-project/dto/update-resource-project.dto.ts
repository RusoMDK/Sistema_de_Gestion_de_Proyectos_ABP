import { PartialType } from '@nestjs/swagger';
import { CreateResourceProjectDto } from './create-resource-project.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateResourceProjectDto extends PartialType(
  CreateResourceProjectDto,
) {
  @IsOptional()
  @IsNumber()
  amount_in_project?: number;
}
