import { Module } from '@nestjs/common';
import { EvetReunionService } from './evet_reunion.service';
import { EvetReunionController } from './evet_reunion.controller';

@Module({
  controllers: [EvetReunionController],
  providers: [EvetReunionService],
})
export class EvetReunionModule {}
