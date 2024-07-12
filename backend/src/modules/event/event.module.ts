import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import {
  EvetSensitizationActivitiesModule,
  EvetCommunityDevelopmentModule,
  EvetReunionModule,
} from './modules';
import { Event, Project } from 'src/core/models/public';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EventController],
  providers: [EventService],
  imports: [
    TypeOrmModule.forFeature([Project, Event]),
    EvetSensitizationActivitiesModule,
    EvetCommunityDevelopmentModule,
    EvetReunionModule,
  ],
})
export class EventModule {}
