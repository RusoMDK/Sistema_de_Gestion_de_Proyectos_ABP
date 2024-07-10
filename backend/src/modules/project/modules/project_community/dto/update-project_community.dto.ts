import { PartialType } from '@nestjs/swagger';
import { CreateProjectCommunityDto } from './create-project_community.dto';

export class UpdateProjectCommunityDto extends PartialType(CreateProjectCommunityDto) {}
