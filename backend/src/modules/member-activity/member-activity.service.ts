import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberActivityDto } from './dto/create-member-activity.dto';
// import { UpdateMemberActivityDto } from './dto/update-member-activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity, Member, Member_Activity } from 'src/core/models/public';
import { Repository } from 'typeorm';
import { FindOptionsDto } from './dto/find-options.dto';

@Injectable()
export class MemberActivityService {
  constructor(
    @InjectRepository(Member_Activity)
    private readonly memberActivityRepository: Repository<Member_Activity>,
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  async create(createMemberActivityDto: CreateMemberActivityDto) {
    const member = await this.memberRepository.findOneBy({
      id: createMemberActivityDto.member,
    });
    if (!member) {
      throw new NotFoundException(
        `Miembro con ID ${createMemberActivityDto.member} no encontrado`,
      );
    }

    const activity = await this.activityRepository.findOneBy({
      id: createMemberActivityDto.activity,
    });
    if (!activity) {
      throw new NotFoundException(
        `Actividadf con ID ${createMemberActivityDto.activity} no encontrado`,
      );
    }
    const memberActivity = new Member_Activity();
    memberActivity.member = member;
    memberActivity.activity = activity;

    return this.memberActivityRepository.save(memberActivity);
  }

  async findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.memberActivityRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const resourceProject = await this.memberActivityRepository.findOne({
      where: { id },
      relations: findOptions?.relations || [],
    });
    if (!resourceProject) {
      throw new NotFoundException('Recurso en proyecto no encontrado');
    }
    return resourceProject;
  }

  // update(id: string, updateMemberActivityDto: UpdateMemberActivityDto) {
  //   return `This action updates a #${id} memberActivity`;
  // }

  async remove(id: number) {
    const result = await this.memberActivityRepository.delete(id);
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
