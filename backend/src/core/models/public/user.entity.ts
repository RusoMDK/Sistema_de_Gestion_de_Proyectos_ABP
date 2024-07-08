import { IsEmail } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role, Project } from '.';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  @IsEmail(
    {},
    { message: 'El email debe ser una dirección de correo electrónico válida' },
  )
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, (role) => role.user)
  role: Role;

  @OneToMany(() => Project, (project) => project.user)
  project: Project[];
}
