import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEvetCommunityDevelopmentDto {
  @IsNotEmpty()
  @IsString()
  event: string;
}
