import { Module } from '@nestjs/common';
import { ProjectInfrastructureService } from './project_infrastructure.service';
import { ProjectInfrastructureController } from './project_infrastructure.controller';

@Module({
  controllers: [ProjectInfrastructureController],
  providers: [ProjectInfrastructureService],
})
export class ProjectInfrastructureModule {}
