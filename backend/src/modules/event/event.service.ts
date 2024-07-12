import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event, Project } from 'src/core/models/public';
import { Repository } from 'typeorm';
import { FindOptionsDto } from './dto/find-options.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createEventProjectDto: CreateEventDto) {
    const project = await this.projectRepository.findOneBy({
      id: createEventProjectDto.project,
    });
    if (!project) {
      throw new NotFoundException(
        `Proyecto con ID ${createEventProjectDto.project} no encontrado`,
      );
    }

    const event = new Event();
    event.project = project;
    event.name = createEventProjectDto.name;
    event.description = createEventProjectDto.description;
    event.type = createEventProjectDto.type;
    event.start_date = createEventProjectDto.start_date;
    event.end_date = createEventProjectDto.end_date;

    return this.eventRepository.save(event);
  }

  findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.eventRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const resourceProject = await this.eventRepository.findOne({
      where: { id },
      relations: findOptions?.relations || [],
    });
    if (!resourceProject) {
      throw new NotFoundException('Evento no encontrado');
    }
    return resourceProject;
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const result = await this.eventRepository.findOneBy({ id });
    if (!result) {
      throw new NotFoundException('Eventono encontrado');
    }

    result.name = updateEventDto.name ? updateEventDto.name : result.name;
    result.description = updateEventDto.description
      ? updateEventDto.description
      : result.description;
    return this.eventRepository.save(result);
  }

  async remove(id: string) {
    const result = await this.eventRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Evento no encontrado');
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
