import { Module } from '@nestjs/common';
import { ProjectInfrastructureService } from './project_infrastructure.service';
import { ProjectInfrastructureController } from './project_infrastructure.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Infrastructure } from 'src/core/models/project';
import { Project } from 'src/core/models/public';

@Module({
  imports: [TypeOrmModule.forFeature([Infrastructure, Project])],
  controllers: [ProjectInfrastructureController],
  providers: [ProjectInfrastructureService],
})
export class ProjectInfrastructureModule {}
