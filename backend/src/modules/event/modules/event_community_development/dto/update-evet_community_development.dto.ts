import { PartialType } from '@nestjs/swagger';
import { CreateEvetCommunityDevelopmentDto } from './create-evet_community_development.dto';

export class UpdateEvetCommunityDevelopmentDto extends PartialType(CreateEvetCommunityDevelopmentDto) {}
