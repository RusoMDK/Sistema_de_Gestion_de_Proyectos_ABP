import { Injectable } from '@nestjs/common';
import { CreateEvetReunionDto } from './dto/create-evet_reunion.dto';
import { UpdateEvetReunionDto } from './dto/update-evet_reunion.dto';

@Injectable()
export class EvetReunionService {
  create(createEvetReunionDto: CreateEvetReunionDto) {
    return 'This action adds a new evetReunion';
  }

  findAll() {
    return `This action returns all evetReunion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evetReunion`;
  }

  update(id: number, updateEvetReunionDto: UpdateEvetReunionDto) {
    return `This action updates a #${id} evetReunion`;
  }

  remove(id: number) {
    return `This action removes a #${id} evetReunion`;
  }
}
