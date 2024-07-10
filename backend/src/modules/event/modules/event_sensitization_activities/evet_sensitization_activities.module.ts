import { Module } from '@nestjs/common';
import { EvetSensitizationActivitiesService } from './evet_sensitization_activities.service';
import { EvetSensitizationActivitiesController } from './evet_sensitization_activities.controller';

@Module({
  controllers: [EvetSensitizationActivitiesController],
  providers: [EvetSensitizationActivitiesService],
})
export class EvetSensitizationActivitiesModule {}
