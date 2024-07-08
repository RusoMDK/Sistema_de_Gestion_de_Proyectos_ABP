import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Project, Resource } from '.';

@Entity()
export class Resource_Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column()
  amount_in_project: number;

  @ManyToOne(() => Project, (project) => project.resource_project, {
    onDelete: 'CASCADE',
  })
  project: Project;

  @ManyToOne(() => Resource, (resource) => resource.resource_project, {
    onDelete: 'CASCADE',
  })
  resource: Resource;
}
