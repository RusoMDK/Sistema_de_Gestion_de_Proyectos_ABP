import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  ocupation: string;

  @IsNotEmpty()
  @IsString()
  project: string;
}
