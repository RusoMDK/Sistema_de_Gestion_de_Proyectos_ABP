import { Activity } from "./activity.model";
import { Project } from "./project.model";

export interface Task {
    id: string;
    name: string;
    description: string;
    start_date: Date;
    estimated_end_date: Date;
    end_date?: Date | null;
    project: Project;  // Relación con Project
    activity: Activity[];  // Relación con Activity
  }