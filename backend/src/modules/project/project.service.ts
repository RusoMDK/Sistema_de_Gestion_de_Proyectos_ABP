import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project, User } from 'src/core/models/public';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOptionsDto } from './dto/find-options.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto, req: Request) {
    try {
      console.log(createProjectDto.description);
      if (!createProjectDto.author_name) {
        createProjectDto.author_name = req['user'].name;
      }
      const project = this.projectRepository.create(createProjectDto);
      project.user = { id: req['user'].sub } as User;

      return await this.projectRepository.save(project);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.driverError.detail);
    }
  }

  async findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return await this.projectRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const project = await this.projectRepository.findOne({
      where: { id },
      relations: findOptions?.relations || [],
    });
    if (!project) {
      throw new NotFoundException('Proyecto no encontrado');
    }
    return project;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const result = await this.projectRepository.update(id, updateProjectDto);
    if (result.affected === 0) {
      throw new NotFoundException('Proyecto no encontrado');
    }
    return result;
  }

  async remove(id: string) {
    const result = await this.projectRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Proyecto no encontrado');
    }
    return result;
  }

  //funcion para validar los parametros ha utilizar para una consutla
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
