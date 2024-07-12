import { PartialType } from '@nestjs/swagger';
import { CreateMemberActivityDto } from './create-member-activity.dto';

export class UpdateMemberActivityDto extends PartialType(CreateMemberActivityDto) {}
