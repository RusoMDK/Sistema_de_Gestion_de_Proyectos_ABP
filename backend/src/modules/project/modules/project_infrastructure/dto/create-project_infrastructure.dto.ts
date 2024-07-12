import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectInfrastructureDto {
  @IsNotEmpty()
  @IsString()
  project: string;
}
