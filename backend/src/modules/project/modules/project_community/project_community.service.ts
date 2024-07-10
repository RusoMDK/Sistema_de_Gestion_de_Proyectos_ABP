import { Injectable } from '@nestjs/common';
import { CreateProjectCommunityDto } from './dto/create-project_community.dto';
import { UpdateProjectCommunityDto } from './dto/update-project_community.dto';

@Injectable()
export class ProjectCommunityService {
  create(createProjectCommunityDto: CreateProjectCommunityDto) {
    return 'This action adds a new projectCommunity';
  }

  findAll() {
    return `This action returns all projectCommunity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectCommunity`;
  }

  update(id: number, updateProjectCommunityDto: UpdateProjectCommunityDto) {
    return `This action updates a #${id} projectCommunity`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectCommunity`;
  }
}
