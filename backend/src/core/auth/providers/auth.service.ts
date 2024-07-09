import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from '../dto/login.dto';
import { hash, compare } from 'bcrypt';
import { Role, User } from 'src/core/models/public';
import { CreateUserDto } from 'src/core/user/dto/create-user.dto';
import { UserService } from 'src/core/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(
    createUserDto: CreateUserDto,
  ): Promise<{ accessToken: string }> {
    const { password } = createUserDto;
    const plainToHash = await hash(password, 10);
    if (!createUserDto.role) {
      createUserDto.role = await this.roleRepository.findOneBy({
        name: 'USER',
      });
    }
    const user = this.userRepository.create({
      ...createUserDto,
      password: plainToHash,
    });
    await this.userRepository.save(user);

    const payload = { name: user.name, sub: user.id, role: user.role };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const { usernameOrEmail, password } = loginDto;
    const user = await this.userRepository.findOne({
      where: [{ name: usernameOrEmail }, { email: usernameOrEmail }],
      relations: ['role'],
    });

    if (user && (await compare(password, user.password))) {
      const payload = {
        name: user.name,
        sub: user.id,
        role: user.role.name,
      };
      console.log(payload);
      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Invalid login credentials');
    }
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneName(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
