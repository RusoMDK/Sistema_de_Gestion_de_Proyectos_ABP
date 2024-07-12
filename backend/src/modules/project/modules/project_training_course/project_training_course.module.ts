import { Module } from '@nestjs/common';
import { ProjectTrainingCourseService } from './project_training_course.service';
import { ProjectTrainingCourseController } from './project_training_course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingCourse } from 'src/core/models/project';
import { Project } from 'src/core/models/public';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingCourse, Project])],
  controllers: [ProjectTrainingCourseController],
  providers: [ProjectTrainingCourseService],
})
export class ProjectTrainingCourseModule {}
