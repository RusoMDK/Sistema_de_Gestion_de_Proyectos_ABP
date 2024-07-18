import { User } from './user.model';
import { RoleName } from '../roles/enum/roles.enum';

export interface Role {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: RoleName;
  user: User[];  // Relación con User
}