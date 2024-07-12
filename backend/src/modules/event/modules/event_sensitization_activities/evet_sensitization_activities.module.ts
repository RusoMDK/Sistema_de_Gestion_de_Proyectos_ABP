import { Module } from '@nestjs/common';
import { EvetSensitizationActivitiesService } from './evet_sensitization_activities.service';
import { EvetSensitizationActivitiesController } from './evet_sensitization_activities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensitizationActivities } from 'src/core/models/event';
import { Event } from 'src/core/models/public';

@Module({
  imports: [TypeOrmModule.forFeature([SensitizationActivities, Event])],
  controllers: [EvetSensitizationActivitiesController],
  providers: [EvetSensitizationActivitiesService],
})
export class EvetSensitizationActivitiesModule {}
