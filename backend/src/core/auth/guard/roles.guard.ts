import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { Role } from '../enum/roles.enum';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { ROLES_KEY } from 'src/core/function/GlobalFunctions';

interface JwtPayload {
  id: number;
  name: string;
  role: Role;
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
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header not found');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    try {
      const secret = this.configService.get<string>('JWT_SECRET');
      const decoded = jwt.verify(token, secret) as JwtPayload;
      request.user = decoded;

      if (!decoded.role) {
        throw new UnauthorizedException('Role not found in token');
      }

      return requiredRoles.includes(decoded.role);
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
