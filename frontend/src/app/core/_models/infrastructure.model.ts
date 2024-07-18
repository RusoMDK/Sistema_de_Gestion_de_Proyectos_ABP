import { Project } from './project.model';

export interface Infrastructure {
  id: string;
  created_at: Date;
  updated_at: Date;
  project: Project;  // Relación con Project
}