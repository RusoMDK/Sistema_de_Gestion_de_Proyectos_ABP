import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member, Project } from 'src/core/models/public';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsDto } from './dto/find-options.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    const project = await this.projectRepository.findOneBy({
      id: createMemberDto.project,
    });
    if (!project) {
      throw new NotFoundException(
        `Proyecto con ID ${createMemberDto.project} no encontrado`,
      );
    }

    const member = new Member();
    member.project = project;
    member.name = createMemberDto.name;
    member.ocupation = createMemberDto.ocupation;
    member.last_name = createMemberDto.last_name;

    return this.memberRepository.save(member);
  }

  findAll(query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);

    return this.memberRepository.find({
      relations: findOptions?.relations || [],
    });
  }

  async findOne(id: string, query: FindOptionsDto) {
    const findOptions = this.verifyFindOptions(query);
    const member = await this.memberRepository.findOne({
      where: { id },
      relations: findOptions?.relations || [],
    });
    if (!member) {
      throw new NotFoundException('Miembro de proyecto no encontrado');
    }
    return member;
  }

  async update(id: string, updateMemberDto: UpdateMemberDto) {
    const result = await this.memberRepository.findOneBy({ id });
    if (!result) {
      throw new NotFoundException('Recurso en el proyecto no encontrado');
    }

    if (updateMemberDto.name) {
      result.name = updateMemberDto.name;
    }
    if (updateMemberDto.last_name) {
      result.last_name = updateMemberDto.last_name;
    }
    if (updateMemberDto.ocupation) {
      result.ocupation = updateMemberDto.ocupation;
    }
    return this.memberRepository.save(result);
  }

  async remove(id: string) {
    const result = await this.memberRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Miembro de proyecto no encontrado');
    }
    return result;
  }

  private verifyFindOptions(query: FindOptionsDto): FindOptionsDto {
    const findOptions: FindOptionsDto = query;
    if (query.relations) {
      if (typeof query.relations === 'string') {
        findOptions.relations = [query.relations];
      } else {
        findOptions.relations = query.relations;
      }
    }
    return findOptions;
  }
}
