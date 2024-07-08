import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Member_Activity, Project } from '.';

@Entity()
export class Member {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({ unique: true })
  name: string;

  @Column()
  last_name: string;

  @Column()
  ocupation: string;

  @ManyToOne(() => Project, (project) => project.member)
  project: Project;

  @OneToMany(
    () => Member_Activity,
    (member_activity) => member_activity.activity,
  )
  member_acitivity: Member_Activity[];
}
