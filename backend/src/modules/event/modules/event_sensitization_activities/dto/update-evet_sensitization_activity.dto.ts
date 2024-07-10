import { PartialType } from '@nestjs/swagger';
import { CreateEvetSensitizationActivityDto } from './create-evet_sensitization_activity.dto';

export class UpdateEvetSensitizationActivityDto extends PartialType(CreateEvetSensitizationActivityDto) {}
