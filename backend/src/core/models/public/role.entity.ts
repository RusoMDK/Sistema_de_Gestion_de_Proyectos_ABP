import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { User } from '.';
import { RoleName } from 'src/core/roles/enum/roles.enum';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({
    unique: true,
    type: 'enum',
    enum: RoleName,
    default: RoleName.USER,
  })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  user: User[];
}
