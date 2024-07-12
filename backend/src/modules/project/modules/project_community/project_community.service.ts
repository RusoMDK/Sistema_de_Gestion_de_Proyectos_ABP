import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectCommunityDto } from './dto/create-project_community.dto';
// import { UpdateProjectCommunityDto } from './dto/update-project_community.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CommunityWork } from 'src/core/models/project';
import { Project } from 'src/core/models/public';
import { Repository } from 'typeorm';
import { FindOptionsDto } from './dto/find-options.dto';

@Injectable()
export class ProjectCommunityService {
  constructor(
    @InjectRepository(CommunityWork)
    private readonly communityWorkRepository: Repository<CommunityWork>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createCommunityWork: CreateProjectCommunityDto) {
    const project = await this.projectRepository.findOneBy({
      id: createCommunityWork.project,
    });
    if (!project) {
      throw new NotFoundException(
        `Proyecto con ID ${createCommunityWork.project} no encontrado`,
      );
    }

    const communityWork = new CommunityWork();
    communityWork.project = project;

    return this.communityWorkRepository.save(communityWork);
  }

  findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.communityWorkRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const result = await this.communityWorkRepository.findOne({
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
    const result = await this.communityWorkRepository.delete(id);
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
