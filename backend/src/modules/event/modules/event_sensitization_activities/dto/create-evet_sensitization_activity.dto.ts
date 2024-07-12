import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEvetSensitizationActivityDto {
  @IsNotEmpty()
  @IsString()
  event: string;
}
