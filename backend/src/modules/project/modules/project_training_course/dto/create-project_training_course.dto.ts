import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectTrainingCourseDto {
  @IsNotEmpty()
  @IsString()
  project: string;
}
