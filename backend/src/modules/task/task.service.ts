import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project, Task } from 'src/core/models/public';
import { Repository } from 'typeorm';
import { FindOptionsDto } from './dto/find-options.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const project = await this.projectRepository.findOneBy({
      id: createTaskDto.project,
    });
    if (!project) {
      throw new NotFoundException(
        `Proyecto con ID ${createTaskDto.project} no encontrado`,
      );
    }

    const task = new Task();
    task.project = project;
    task.name = createTaskDto.name;
    task.description = createTaskDto.description;
    task.start_date = createTaskDto.start_date;
    task.estimated_end_date = createTaskDto.estimated_end_date;

    return this.taskRepository.save(task);
  }

  findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.taskRepository.find({
      relations: findOptions?.relations || [],
    });
  }
  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const resource = await this.taskRepository.findOne({
      where: { id },
      relations: findOptions?.relations || [],
    });
    if (!resource) {
      throw new NotFoundException('Proyecto no encontrado');
    }
    return resource;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const result = await this.taskRepository.findOneBy({ id });
    if (!result) {
      throw new NotFoundException('Recurso en el proyecto no encontrado');
    }

    if (updateTaskDto.name) {
      result.name = updateTaskDto.name;
    }
    if (updateTaskDto.description) {
      result.description = updateTaskDto.description;
    }
    if (updateTaskDto.end_date) {
      result.end_date = updateTaskDto.end_date;
    }
    return this.taskRepository.save(result);
  }

  async remove(id: string) {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Proyecto no encontrado');
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
