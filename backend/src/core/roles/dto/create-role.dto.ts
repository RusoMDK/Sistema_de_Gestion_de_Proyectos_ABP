import { IsEnum, IsNotEmpty } from 'class-validator';
import { RoleName } from '../enum/roles.enum';

export class CreateRoleDto {
  @IsNotEmpty()
  @IsEnum(RoleName, {
    message:
      'El nombre del rol no se encuentra dentro de los definidos por el servidor',
  })
  name: string;
}
