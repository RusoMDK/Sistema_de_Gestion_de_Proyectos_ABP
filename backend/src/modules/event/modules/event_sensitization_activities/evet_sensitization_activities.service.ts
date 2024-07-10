import { Injectable } from '@nestjs/common';
import { CreateEvetSensitizationActivityDto } from './dto/create-evet_sensitization_activity.dto';
import { UpdateEvetSensitizationActivityDto } from './dto/update-evet_sensitization_activity.dto';

@Injectable()
export class EvetSensitizationActivitiesService {
  create(createEvetSensitizationActivityDto: CreateEvetSensitizationActivityDto) {
    return 'This action adds a new evetSensitizationActivity';
  }

  findAll() {
    return `This action returns all evetSensitizationActivities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evetSensitizationActivity`;
  }

  update(id: number, updateEvetSensitizationActivityDto: UpdateEvetSensitizationActivityDto) {
    return `This action updates a #${id} evetSensitizationActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} evetSensitizationActivity`;
  }
}
