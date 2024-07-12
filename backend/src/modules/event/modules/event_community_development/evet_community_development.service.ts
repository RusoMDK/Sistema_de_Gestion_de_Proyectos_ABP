import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEvetCommunityDevelopmentDto } from './dto/create-evet_community_development.dto';
// import { UpdateEvetCommunityDevelopmentDto } from './dto/update-evet_community_development.dto';
import { FindOptionsDto } from './dto/find-options.dto';
import { CommunityDevelopment } from 'src/core/models/event';
import { Repository } from 'typeorm';
import { Event } from 'src/core/models/public';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EvetCommunityDevelopmentService {
  constructor(
    @InjectRepository(CommunityDevelopment)
    private readonly communityDevelopmentRepository: Repository<CommunityDevelopment>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(createCommunityDevelopment: CreateEvetCommunityDevelopmentDto) {
    const event = await this.eventRepository.findOneBy({
      id: createCommunityDevelopment.event,
    });
    if (!event) {
      throw new NotFoundException(
        `Evento con ID ${createCommunityDevelopment.event} no encontrado`,
      );
    }

    const communityDevelopment = new CommunityDevelopment();
    communityDevelopment.event = event;

    return this.communityDevelopmentRepository.save(communityDevelopment);
  }

  findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.communityDevelopmentRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const result = await this.communityDevelopmentRepository.findOne({
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
    const result = await this.communityDevelopmentRepository.delete(id);
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
