import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Project } from '.';
import {
  CommunityDevelopment,
  Reunion,
  SensitizationActivities,
} from '../event';

@Entity()
export class Event {
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

  @Column({ type: 'timestamp' })
  start_date: Date;

  @Column()
  end_date: Date | null;

  @ManyToOne(() => Project, (project) => project.event, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  project: Project;

  @OneToMany(
    () => CommunityDevelopment,
    (community_development) => community_development.event,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  community_development: CommunityDevelopment[];

  @OneToMany(() => Reunion, (reunion) => reunion.event, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  reunion: Reunion[];

  @OneToMany(
    () => SensitizationActivities,
    (sensitization_activities) => sensitization_activities.event,
    {
      cascade: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  sensitization_activities: SensitizationActivities[];
}
