import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectCommunityDto {
  @IsNotEmpty()
  @IsString()
  project: string;
}
