import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateResourceProjectDto {
  @IsNotEmpty()
  @IsNumber()
  amount_in_project: number;

  @IsNotEmpty()
  @IsString()
  project: string;

  @IsNotEmpty()
  @IsString()
  resource: string;
}
