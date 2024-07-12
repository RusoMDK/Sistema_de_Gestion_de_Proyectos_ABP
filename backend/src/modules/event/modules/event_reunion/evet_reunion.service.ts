import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEvetReunionDto } from './dto/create-evet_reunion.dto';
import { Reunion } from 'src/core/models/event';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/core/models/public';
import { FindOptionsDto } from './dto/find-options.dto';
// import { UpdateEvetReunionDto } from './dto/update-evet_reunion.dto';

@Injectable()
export class EvetReunionService {
  constructor(
    @InjectRepository(Reunion)
    private readonly reunionRepository: Repository<Reunion>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(createEventReunion: CreateEvetReunionDto) {
    const event = await this.eventRepository.findOneBy({
      id: createEventReunion.event,
    });
    if (!event) {
      throw new NotFoundException(
        `Eventp con ID ${createEventReunion.event} no encontrado`,
      );
    }

    const reunion = new Reunion();
    reunion.event = event;

    return this.reunionRepository.save(reunion);
  }

  findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.reunionRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const result = await this.reunionRepository.findOne({
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
    const result = await this.reunionRepository.delete(id);
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
