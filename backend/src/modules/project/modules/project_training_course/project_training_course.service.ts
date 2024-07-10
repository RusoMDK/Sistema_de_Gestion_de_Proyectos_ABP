import { Injectable } from '@nestjs/common';
import { CreateProjectTrainingCourseDto } from './dto/create-project_training_course.dto';
import { UpdateProjectTrainingCourseDto } from './dto/update-project_training_course.dto';

@Injectable()
export class ProjectTrainingCourseService {
  create(createProjectTrainingCourseDto: CreateProjectTrainingCourseDto) {
    return 'This action adds a new projectTrainingCourse';
  }

  findAll() {
    return `This action returns all projectTrainingCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectTrainingCourse`;
  }

  update(id: number, updateProjectTrainingCourseDto: UpdateProjectTrainingCourseDto) {
    return `This action updates a #${id} projectTrainingCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectTrainingCourse`;
  }
}
