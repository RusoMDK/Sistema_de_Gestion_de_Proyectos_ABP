import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectInfrastructureDto } from './dto/create-project_infrastructure.dto';
import { FindOptionsDto } from './dto/find-options.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Infrastructure } from 'src/core/models/project';
import { Repository } from 'typeorm';
import { Project } from 'src/core/models/public';
// import { UpdateProjectInfrastructureDto } from './dto/update-project_infrastructure.dto';

@Injectable()
export class ProjectInfrastructureService {
  constructor(
    @InjectRepository(Infrastructure)
    private readonly infrastructureRepository: Repository<Infrastructure>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createInfrastructure: CreateProjectInfrastructureDto) {
    const project = await this.projectRepository.findOneBy({
      id: createInfrastructure.project,
    });
    if (!project) {
      throw new NotFoundException(
        `Proyecto con ID ${createInfrastructure.project} no encontrado`,
      );
    }

    const infrastructure = new Infrastructure();
    infrastructure.project = project;

    return this.infrastructureRepository.save(infrastructure);
  }

  findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.infrastructureRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const result = await this.infrastructureRepository.findOne({
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
    const result = await this.infrastructureRepository.delete(id);
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
