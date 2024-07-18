import { Project } from "./project.model";
import { Resource } from "./resource.model";

export interface ResourceProject {
    id: string;
    created_at: Date;
    updated_at: Date;
    amount_in_project: number;
    project: Project;  // Relación con Project
    resource: Resource;  // Relación con Resource
  }