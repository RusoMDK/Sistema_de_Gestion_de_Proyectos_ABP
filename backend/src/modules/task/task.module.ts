import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project, Task } from 'src/core/models/public';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Project])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
