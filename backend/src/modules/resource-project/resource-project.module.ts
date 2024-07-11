import { Module } from '@nestjs/common';
import { ResourceProjectService } from './resource-project.service';
import { ResourceProjectController } from './resource-project.controller';
import { Project, Resource, Resource_Project } from 'src/core/models/public';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Resource_Project, Resource, Project])],
  controllers: [ResourceProjectController],
  providers: [ResourceProjectService],
})
export class ResourceProjectModule {}
