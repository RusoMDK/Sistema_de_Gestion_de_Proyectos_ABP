import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import {
  ReportQuery,
  EmptyStrategy,
  ValidationStrategy,
  AssignmentSadies102LandscapeSrategy,
} from './class/report-query';

@Injectable()
export class ReportsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async getReport(reportDTO: CreateReportDto): Promise<any> {
    const { report_name, file_type, params, report_folder } = reportDTO;
    const validation = this.createValidationStrategy(report_name);

    const reportQuery = new ReportQuery(
      report_name,
      file_type,
      params,
      validation,
      this.configService,
      this.httpService,
    );
    // const validate = reportQuery.validateParams();

    // if (validate) {
      return reportQuery.getReport(report_folder);
    // }
  }

  private createValidationStrategy(report_name: string): ValidationStrategy {
    switch (report_name) {
      case 'AssignmentSadies102Landscape':
        console.log(`entando en el switch-case de asignamet sadies`);
        return new AssignmentSadies102LandscapeSrategy();

      default:
        return new EmptyStrategy();
    }
  }
}
