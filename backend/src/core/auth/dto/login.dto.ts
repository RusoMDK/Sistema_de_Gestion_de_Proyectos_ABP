import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
// import { IsPassword } from '../decorators/is-password.decorator';

export class LoginDto {
  @IsNotEmpty()
  @ApiProperty()
  usernameOrEmail: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  // @IsPassword()
  password: string;
}
