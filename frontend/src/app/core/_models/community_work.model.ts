import { Project } from './project.model';

export interface CommunityWork {
  id: string;
  created_at: Date;
  updated_at: Date;
  project: Project;  // Relación con Project
}