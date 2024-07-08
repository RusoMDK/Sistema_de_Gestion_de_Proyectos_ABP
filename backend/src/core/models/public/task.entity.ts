import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Activity, Project } from '.';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column({ type: 'timestamp' })
  start_date: Date;

  @Column({ type: 'timestamp' })
  estimated_end_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  end_date: Date | null;

  @ManyToOne(() => Project, (project) => project.task, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  project: Project;

  @OneToMany(() => Activity, (activity) => activity.task, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  activity: Activity[];
}
