import { PartialType } from '@nestjs/swagger';
import { CreateProjectTrainingCourseDto } from './create-project_training_course.dto';

export class UpdateProjectTrainingCourseDto extends PartialType(CreateProjectTrainingCourseDto) {}
