import { IsString, IsNotEmpty, IsNotEmptyObject } from 'class-validator';

export class CreateReportDto {
  @IsNotEmpty()
  @IsString()
  readonly file_type: string;

  @IsNotEmpty()
  @IsString()
  readonly file_name: string;

  @IsNotEmptyObject()
  readonly params: object;

  @IsNotEmpty()
  @IsString()
  readonly report_folder: string;

  @IsNotEmpty()
  @IsString()
  readonly report_name: string;
}
