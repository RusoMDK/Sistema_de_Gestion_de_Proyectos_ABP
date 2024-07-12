import { Module } from '@nestjs/common';
import { EvetCommunityDevelopmentService } from './evet_community_development.service';
import { EvetCommunityDevelopmentController } from './evet_community_development.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunityDevelopment } from 'src/core/models/event';
import { Event } from 'src/core/models/public';

@Module({
  imports: [TypeOrmModule.forFeature([CommunityDevelopment, Event])],
  controllers: [EvetCommunityDevelopmentController],
  providers: [EvetCommunityDevelopmentService],
})
export class EvetCommunityDevelopmentModule {}
