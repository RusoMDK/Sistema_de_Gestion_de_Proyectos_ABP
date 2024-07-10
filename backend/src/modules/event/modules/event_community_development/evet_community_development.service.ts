import { Injectable } from '@nestjs/common';
import { CreateEvetCommunityDevelopmentDto } from './dto/create-evet_community_development.dto';
import { UpdateEvetCommunityDevelopmentDto } from './dto/update-evet_community_development.dto';

@Injectable()
export class EvetCommunityDevelopmentService {
  create(createEvetCommunityDevelopmentDto: CreateEvetCommunityDevelopmentDto) {
    return 'This action adds a new evetCommunityDevelopment';
  }

  findAll() {
    return `This action returns all evetCommunityDevelopment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evetCommunityDevelopment`;
  }

  update(id: number, updateEvetCommunityDevelopmentDto: UpdateEvetCommunityDevelopmentDto) {
    return `This action updates a #${id} evetCommunityDevelopment`;
  }

  remove(id: number) {
    return `This action removes a #${id} evetCommunityDevelopment`;
  }
}
