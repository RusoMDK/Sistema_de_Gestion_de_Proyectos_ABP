import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEvetSensitizationActivityDto } from './dto/create-evet_sensitization_activity.dto';
// import { UpdateEvetSensitizationActivityDto } from './dto/update-evet_sensitization_activity.dto';
import { FindOptionsDto } from './dto/find-options.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/core/models/public';
import { Repository } from 'typeorm';
import { SensitizationActivities } from 'src/core/models/event';

@Injectable()
export class EvetSensitizationActivitiesService {
  constructor(
    @InjectRepository(SensitizationActivities)
    private readonly sensitizationActivitiesRepository: Repository<SensitizationActivities>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(
    createSensitizationActivities: CreateEvetSensitizationActivityDto,
  ) {
    const event = await this.eventRepository.findOneBy({
      id: createSensitizationActivities.event,
    });
    if (!event) {
      throw new NotFoundException(
        `Evento con ID ${createSensitizationActivities.event} no encontrado`,
      );
    }

    const sensitizationActivity = new SensitizationActivities();
    sensitizationActivity.event = event;

    return this.sensitizationActivitiesRepository.save(sensitizationActivity);
  }

  findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.sensitizationActivitiesRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const result = await this.sensitizationActivitiesRepository.findOne({
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
    const result = await this.sensitizationActivitiesRepository.delete(id);
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
