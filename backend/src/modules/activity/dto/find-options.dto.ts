import { IsOptional, IsIn, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';

export class FindOptionsDto {
  @IsOptional()
  @ValidateIf(
    (o) => typeof o.relations === 'string' || Array.isArray(o.relations),
  )
  @IsIn(['task', 'member_acitivity'], { each: true })
  @Type(() => String)
  relations?: string[];
}
