import { PartialType } from '@nestjs/swagger';
import { CreateEvetReunionDto } from './create-evet_reunion.dto';

export class UpdateEvetReunionDto extends PartialType(CreateEvetReunionDto) {}
