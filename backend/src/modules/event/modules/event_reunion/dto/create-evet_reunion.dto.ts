import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEvetReunionDto {
  @IsNotEmpty()
  @IsString()
  event: string;
}
