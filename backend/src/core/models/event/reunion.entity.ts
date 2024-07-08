import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Event } from '../public';

@Entity({ name: 'tb_event_reunion', schema: 'event' })
export class Reunion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @ManyToOne(() => Event, (event) => event.reunion, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  event: Event;
}
