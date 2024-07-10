import { PartialType } from '@nestjs/swagger';
import { CreateProjectSocioeconomicActivityDto } from './create-project_socioeconomic_activity.dto';

export class UpdateProjectSocioeconomicActivityDto extends PartialType(CreateProjectSocioeconomicActivityDto) {}
