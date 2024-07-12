import { Module } from '@nestjs/common';
import { EvetReunionService } from './evet_reunion.service';
import { EvetReunionController } from './evet_reunion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reunion } from 'src/core/models/event';
import { Event } from 'src/core/models/public';

@Module({
  imports: [TypeOrmModule.forFeature([Reunion, Event])],
  controllers: [EvetReunionController],
  providers: [EvetReunionService],
})
export class EvetReunionModule {}
