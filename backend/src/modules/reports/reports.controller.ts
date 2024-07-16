import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  test(@Body() reportDTO: CreateReportDto, @Res() res: Response) {
    this.reportsService.getReport(reportDTO).then((report) => {
      switch (reportDTO.file_type) {
        case 'pdf':
          res.set({
            'Content-Disposition': `attachment; filename="${reportDTO.file_name}.pdf"`,
            'Content-Type': 'application/pdf',
          });
          report.pipe(res);
          break;
        case 'xls':
          res.setHeader('Content-Type', 'application/vnd.ms-excel');
          res.setHeader(
            'Content-Disposition',
            `attachment; filename="${reportDTO.file_name}.xls"`,
          );
          report.pipe(res);
          break;
        default:
          res.send('El tipo de archivo no se ha encontrado');
          break;
      }
    });
  }
}
