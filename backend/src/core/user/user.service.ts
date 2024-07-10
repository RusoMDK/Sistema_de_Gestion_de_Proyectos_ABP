import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/public/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(createUserDto.password, salt);
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashed,
    });
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['role'] });
  }

  async findOneName(name: string): Promise<User> {
    return this.userRepository.findOne({
      where: { name },
      relations: ['role'],
    });
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
      relations: ['role'],
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
