import { PartialType } from '@nestjs/swagger';
import { CreateActivityDto } from './create-activity.dto';
import { IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  end_date: Date;
}
