import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Resource_Project } from '.';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({ unique: true })
  name: string;

  @Column()
  type: string;

  @Column({ nullable: true })
  amount: number;

  @Column({ nullable: true })
  description: string;

  @OneToMany(
    () => Resource_Project,
    (resource_project) => resource_project.resource,
  )
  resource_project: Resource_Project[];
}
