import { Project } from './project.model';

export interface SocioeconomicActivities {
  id: string;
  created_at: Date;
  updated_at: Date;
  project: Project;  // Relación con Project
}