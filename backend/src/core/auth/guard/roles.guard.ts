import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { ROLES_KEY } from 'src/core/function/GlobalFunctions';
import { RoleName } from 'src/core/roles/enum/roles.enum';

interface JwtPayload {
  id: number;
  name: string;
  role: RoleName;
  // otros campos si los tienes
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private configService: ConfigService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<RoleName[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Header de autorización no econtrado');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token de autorización no econtrado');
    }

    try {
      const secret = this.configService.get<string>('JWT_SECRET');
      const decoded = jwt.verify(token, secret) as JwtPayload;

      request.user = decoded;

      if (!decoded.role) {
        throw new UnauthorizedException('Rol no encontrado en el token');
      }
      return requiredRoles.includes(decoded.role);
    } catch (err) {
      throw new UnauthorizedException('Token no válido');
    }
  }
}
