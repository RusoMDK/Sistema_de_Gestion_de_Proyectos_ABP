import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectTrainingCourseDto } from './dto/create-project_training_course.dto';
import { TrainingCourse } from 'src/core/models/project';
import { Repository } from 'typeorm';
import { Project } from 'src/core/models/public';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsDto } from './dto/find-options.dto';
// import { UpdateProjectTrainingCourseDto } from './dto/update-project_training_course.dto';

@Injectable()
export class ProjectTrainingCourseService {
  constructor(
    @InjectRepository(TrainingCourse)
    private readonly communityWorkRepository: Repository<TrainingCourse>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createTrainingCourseWork: CreateProjectTrainingCourseDto) {
    const project = await this.projectRepository.findOneBy({
      id: createTrainingCourseWork.project,
    });
    if (!project) {
      throw new NotFoundException(
        `Proyecto con ID ${createTrainingCourseWork.project} no encontrado`,
      );
    }

    const communityWork = new TrainingCourse();
    communityWork.project = project;

    return this.communityWorkRepository.save(communityWork);
  }

  findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.communityWorkRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const result = await this.communityWorkRepository.findOne({
      where: { id },
      relations: findOptions?.relations || [],
    });
    if (!result) {
      throw new NotFoundException('Recurso en proyecto no encontrado');
    }
    return result;
  }

  // update(id: string, updateProjectCommunityDto: UpdateProjectCommunityDto) {
  //   return `This action updates a #${id} projectCommunity`;
  // }

  async remove(id: string) {
    const result = await this.communityWorkRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Recurso en el proyecto no encontrado');
    }
    return result;
  }

  private verifyFindOptions(query: FindOptionsDto): FindOptionsDto {
    const findOptions: FindOptionsDto = query;
    if (query.relations) {
      if (typeof query.relations === 'string') {
        findOptions.relations = [query.relations];
      } else {
        findOptions.relations = query.relations;
      }
    }
    return findOptions;
  }
}
