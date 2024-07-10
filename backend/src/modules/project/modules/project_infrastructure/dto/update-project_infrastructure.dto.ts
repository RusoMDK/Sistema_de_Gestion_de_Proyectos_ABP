import { PartialType } from '@nestjs/swagger';
import { CreateProjectInfrastructureDto } from './create-project_infrastructure.dto';

export class UpdateProjectInfrastructureDto extends PartialType(CreateProjectInfrastructureDto) {}
