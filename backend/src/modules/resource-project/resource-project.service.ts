import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResourceProjectDto } from './dto/create-resource-project.dto';
import { UpdateResourceProjectDto } from './dto/update-resource-project.dto';
import { Project, Resource, Resource_Project } from 'src/core/models/public';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsDto } from './dto/find-options.dto';

@Injectable()
export class ResourceProjectService {
  constructor(
    @InjectRepository(Resource_Project)
    private readonly resourceProjectRepository: Repository<Resource_Project>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,
  ) {}

  async create(createResourceProjectDto: CreateResourceProjectDto) {
    // Obtener las entidades Project y Resource basadas en los IDs del DTO
    const project = await this.projectRepository.findOneBy({
      id: createResourceProjectDto.project,
    });
    if (!project) {
      throw new NotFoundException(
        `Proyecto con ID ${createResourceProjectDto.project} no encontrado`,
      );
    }

    const resource = await this.resourceRepository.findOneBy({
      id: createResourceProjectDto.resource,
    });
    if (!resource) {
      throw new NotFoundException(
        `Recurso con ID ${createResourceProjectDto.resource} no encontrado`,
      );
    }

    const resourceProject = new Resource_Project();
    resourceProject.project = project;
    resourceProject.resource = resource;
    resourceProject.amount_in_project =
      createResourceProjectDto.amount_in_project;

    return this.resourceProjectRepository.save(resourceProject);
  }

  findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.resourceProjectRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const resourceProject = await this.resourceProjectRepository.findOne({
      where: { id },
      relations: findOptions?.relations || [],
    });
    if (!resourceProject) {
      throw new NotFoundException('Recurso en proyecto no encontrado');
    }
    return resourceProject;
  }

  async update(id: string, updateResourceProjectDto: UpdateResourceProjectDto) {
    const result = await this.resourceProjectRepository.findOneBy({ id });
    if (!result) {
      throw new NotFoundException('Recurso en el proyecto no encontrado');
    }

    result.amount_in_project = updateResourceProjectDto.amount_in_project;
    return this.resourceProjectRepository.save(result);
  }

  async remove(id: string) {
    const result = await this.resourceProjectRepository.delete(id);
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
