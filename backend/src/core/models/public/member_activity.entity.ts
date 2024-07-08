import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Activity, Member } from '.';

@Entity()
export class Member_Activity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @ManyToOne(() => Member, (member) => member.member_acitivity, {
    onDelete: 'CASCADE',
  })
  member: Member;

  @ManyToOne(() => Activity, (activity) => activity.member_acitivity, {
    onDelete: 'CASCADE',
  })
  activity: Activity;
}
