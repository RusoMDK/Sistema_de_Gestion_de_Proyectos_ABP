import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectSocioeconomicActivityDto } from './dto/create-project_socioeconomic_activity.dto';
// import { UpdateProjectSocioeconomicActivityDto } from './dto/update-project_socioeconomic_activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SocioeconomicActivities } from 'src/core/models/project';
import { Repository } from 'typeorm';
import { Project } from 'src/core/models/public';
import { FindOptionsDto } from './dto/find-options.dto';

@Injectable()
export class ProjectSocioeconomicActivitiesService {
  constructor(
    @InjectRepository(SocioeconomicActivities)
    private readonly socioeconomicActivityRepository: Repository<SocioeconomicActivities>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(
    createSocioeconomicActivity: CreateProjectSocioeconomicActivityDto,
  ) {
    const project = await this.projectRepository.findOneBy({
      id: createSocioeconomicActivity.project,
    });
    if (!project) {
      throw new NotFoundException(
        `Proyecto con ID ${createSocioeconomicActivity.project} no encontrado`,
      );
    }

    const infrastructure = new SocioeconomicActivities();
    infrastructure.project = project;

    return this.socioeconomicActivityRepository.save(infrastructure);
  }

  findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.socioeconomicActivityRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const result = await this.socioeconomicActivityRepository.findOne({
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
    const result = await this.socioeconomicActivityRepository.delete(id);
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
