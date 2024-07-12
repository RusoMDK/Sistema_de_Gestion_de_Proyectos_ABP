import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  task: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  start_date: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  estimated_end_date: Date;
}
