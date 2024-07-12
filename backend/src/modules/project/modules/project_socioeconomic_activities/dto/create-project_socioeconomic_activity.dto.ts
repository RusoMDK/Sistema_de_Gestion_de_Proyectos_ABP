import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectSocioeconomicActivityDto {
  @IsNotEmpty()
  @IsString()
  project: string;
}
