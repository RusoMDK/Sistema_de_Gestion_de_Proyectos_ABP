import { Injectable } from '@nestjs/common';
import { CreateProjectInfrastructureDto } from './dto/create-project_infrastructure.dto';
import { UpdateProjectInfrastructureDto } from './dto/update-project_infrastructure.dto';

@Injectable()
export class ProjectInfrastructureService {
  create(createProjectInfrastructureDto: CreateProjectInfrastructureDto) {
    return 'This action adds a new projectInfrastructure';
  }

  findAll() {
    return `This action returns all projectInfrastructure`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectInfrastructure`;
  }

  update(id: number, updateProjectInfrastructureDto: UpdateProjectInfrastructureDto) {
    return `This action updates a #${id} projectInfrastructure`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectInfrastructure`;
  }
}
