import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { FindOptionsDto } from './dto/find-options.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity, Task } from 'src/core/models/public';
import { Repository } from 'typeorm';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createActivityDto: CreateActivityDto) {
    const _task = await this.taskRepository.findOneBy({
      id: createActivityDto.task,
    });
    if (!_task) {
      throw new NotFoundException(
        `Actividdad con ID ${createActivityDto.task} no encontrada`,
      );
    }

    const activity = new Activity();
    activity.task = _task;
    activity.name = createActivityDto.name;
    activity.description = createActivityDto.description;
    activity.start_date = createActivityDto.start_date;
    activity.estimated_end_date = createActivityDto.estimated_end_date;

    return this.activityRepository.save(activity);
  }

  findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.activityRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const activity = await this.activityRepository.findOne({
      where: { id },
      relations: findOptions?.relations || [],
    });
    if (!activity) {
      throw new NotFoundException('Proyecto no encontrado');
    }
    return activity;
  }

  async update(id: string, updateActivityDto: UpdateActivityDto) {
    const result = await this.activityRepository.findOneBy({ id });
    if (!result) {
      throw new NotFoundException('Actividad no encontrada');
    }

    if (updateActivityDto.name) {
      result.name = updateActivityDto.name;
    }
    if (updateActivityDto.description) {
      result.description = updateActivityDto.description;
    }
    if (updateActivityDto.end_date) {
      result.end_date = updateActivityDto.end_date;
    }
    return this.taskRepository.save(result);
  }

  async remove(id: string) {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Actividad no encontrada');
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
