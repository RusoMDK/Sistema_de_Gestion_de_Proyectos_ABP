import { Project } from "./project.model";

export interface TrainingCourse {
    id: string;
    created_at: Date;
    updated_at: Date;
    project: Project;  // Relación con Project
  }