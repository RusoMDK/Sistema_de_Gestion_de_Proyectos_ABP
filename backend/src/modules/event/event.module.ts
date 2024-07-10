import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import {
  EvetSensitizationActivitiesModule,
  EvetCommunityDevelopmentModule,
  EvetReunionModule,
} from './modules';

@Module({
  controllers: [EventController],
  providers: [EventService],
  imports: [
    EvetSensitizationActivitiesModule,
    EvetCommunityDevelopmentModule,
    EvetReunionModule,
  ],
})
export class EventModule {}
