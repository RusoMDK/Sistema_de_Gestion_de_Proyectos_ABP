import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { Activity, Task } from 'src/core/models/public';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Activity, Task])],
  controllers: [ActivityController],
  providers: [ActivityService],
})
export class ActivityModule {}
