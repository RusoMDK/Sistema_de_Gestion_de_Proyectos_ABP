import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMemberActivityDto {
  @IsNotEmpty()
  @IsString()
  member: string;

  @IsNotEmpty()
  @IsString()
  activity: string;
}
