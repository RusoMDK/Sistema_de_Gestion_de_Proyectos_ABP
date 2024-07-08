import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Member, Resource_Project, Task, Event, User } from '.';
import {
  CommunityWork,
  Infrastructure,
  SocioeconomicActivities,
  TrainingCourse,
} from '../project';

@Entity()
export class Project {
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

  @Column()
  type: string;

  @Column()
  author_name: string;

  @Column({ type: 'timestamp' })
  start_date: Date;

  @Column({ type: 'timestamp' })
  estimated_end_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  end_date: Date | null;

  @ManyToOne(() => User, (user) => user.project)
  user: User;

  @OneToMany(() => Member, (member) => member.project)
  member: Member[];

  @OneToMany(() => Task, (task) => task.project, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  task: Task[];

  @OneToMany(() => Event, (event) => event.project, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  event: Event[];

  @OneToMany(
    () => Resource_Project,
    (resource_project) => resource_project.project,
  )
  resource_project: Resource_Project[];

  @OneToMany(() => Infrastructure, (infrastructure) => infrastructure.project, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  infrastructure: Infrastructure[];

  @OneToMany(() => CommunityWork, (community_work) => community_work.project, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  community_work: CommunityWork[];

  @OneToMany(
    () => TrainingCourse,
    (training_course) => training_course.project,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  training_course: TrainingCourse[];

  @OneToMany(
    () => SocioeconomicActivities,
    (socioeconomic_activities) => socioeconomic_activities.project,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  socioeconomic_activities: TrainingCourse[];
}
