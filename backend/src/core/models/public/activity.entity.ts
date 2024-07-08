import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Task, Member_Activity } from '.';

@Entity()
export class Activity {
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

  @ManyToOne(() => Task, (task) => task.activity, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  task: Task;

  @OneToMany(
    () => Member_Activity,
    (member_activity) => member_activity.activity,
  )
  member_acitivity: Member_Activity[];
}
