import { Module } from '@nestjs/common';
import { ProjectTrainingCourseService } from './project_training_course.service';
import { ProjectTrainingCourseController } from './project_training_course.controller';

@Module({
  controllers: [ProjectTrainingCourseController],
  providers: [ProjectTrainingCourseService],
})
export class ProjectTrainingCourseModule {}
