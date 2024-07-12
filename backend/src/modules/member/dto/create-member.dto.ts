import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  last_name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  ocupation?: string;

  @IsNotEmpty()
  @IsString()
  project: string;
}
