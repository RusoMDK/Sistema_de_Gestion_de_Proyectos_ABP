import { PartialType } from '@nestjs/swagger';
import { CreateMemberDto } from './create-member.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {
  @Optional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @Optional()
  @IsNotEmpty()
  @IsString()
  last_name?: string;

  @Optional()
  @IsNotEmpty()
  @IsString()
  ocupation?: string;

  @Optional()
  @IsNotEmpty()
  @IsString()
  project?: string;
}
