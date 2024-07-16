import { Module  } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    ConfigModule
  ],
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule {}
