import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

export class ReportQuery {
  constructor(
    public readonly report_name: string,
    public readonly file_type: string,
    public readonly params: object,
    public readonly validation: ValidationStrategy,

    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  public async getReport(folder: string) {
    const url =
      this.configService.get<string>('JR_URL') +
      folder +
      '/' +
      this.report_name +
      '.' +
      this.file_type;
    const jasperUser = this.configService.get<string>('JR_USERNAME');
    const jasperPassword = this.configService.get<string>('JR_PASSWORD');
    const params = this.params;

    console.log(url);

    try {
      const report = await firstValueFrom(
        this.httpService.get(url, {
          params,
          responseType: 'stream',
          auth: {
            username: jasperUser,
            password: jasperPassword,
          },
        }),
      );

      return report.data;
    } catch (error) {
      throw new BadRequestException(
        'Error al obtener el reporte durante la petición a la API:',
        error,
      );
    }
  }

  public validateParams(): boolean {
    return this.validation.Validation(this.params);
  }
}

export interface ValidationStrategy {
  Validation(data: object): boolean;
}

export class EmptyStrategy implements ValidationStrategy {
  public Validation(params: Record<string, any>): boolean {
    return true;
    // throw new BadRequestException('Error, reporte no registrado');
  }
}

export class AssignmentSadies102LandscapeSrategy implements ValidationStrategy {
  public Validation(params: Record<string, any>): boolean {
    console.log(`creando validacion para asignament sadies 102`);
    const expectedKeys = [
      'generalSchoolYearAt',
      'GeneralProsecutionAt',
      'convocation',
      'general_mes_title',
      'general_diul_title',
      'general_report_title',
      'general_user_fullname',
      'general_date_generate',
      'general_logo_sigies',
      'general_logo_diul',
      'general_school_year_name',
    ];

    //en caso de faltar alguno las calves esperadas en expectedKeys, se lanza un error
    if (!expectedKeys.every((key) => key in params)) {
      throw new NotFoundException('Faltan parametros en la petición');
    }

    if (!(typeof params['generalSchoolYearAt'] === 'number')) {
      throw new BadRequestException(
        'Error de tipado en los parametros: generalSchoolYearAt debe ser number',
      );
    }
    if (!(typeof params['GeneralProsecutionAt'] === 'number')) {
      throw new BadRequestException(
        'Error de tipado en los parametros: GeneralProsecutionAt debe ser number',
      );
    }
    if (!(typeof params['convocation'] === 'number')) {
      throw new BadRequestException(
        'Error de tipado en los parametros: convocation debe ser number',
      );
    }

    if (!(typeof params['general_mes_title'] === 'string')) {
      throw new BadRequestException(
        'Error de tipado en los parametros: general_mes_title debe ser string',
      );
    }
    if (!(typeof params['general_diul_title'] === 'string')) {
      throw new BadRequestException(
        'Error de tipado en los parametros: general_diul_title debe ser string',
      );
    }
    if (!(typeof params['general_report_title'] === 'string')) {
      throw new BadRequestException(
        'Error de tipado en los parametros: general_report_title debe ser string',
      );
    }
    if (!(typeof params['general_user_fullname'] === 'string')) {
      throw new BadRequestException(
        'Error de tipado en los parametros: general_user_fullname debe ser string',
      );
    }
    if (!(typeof params['general_date_generate'] === 'string')) {
      throw new BadRequestException(
        'Error de tipado en los parametros: general_date_generate debe ser string',
      );
    }
    if (!(typeof params['general_logo_sigies'] === 'string')) {
      throw new BadRequestException(
        'Error de tipado en los parametros: general_logo_sigies debe ser string',
      );
    }
    if (!(typeof params['general_logo_diul'] === 'string')) {
      throw new BadRequestException(
        'Error de tipado en los parametros: general_logo_diul debe ser string',
      );
    }
    if (!(typeof params['general_school_year_name'] === 'string')) {
      throw new BadRequestException(
        'Error de tipado en los parametros: general_school_year_name debe ser string',
      );
    }

    return true;
  }
}
