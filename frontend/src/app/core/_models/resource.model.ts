import { ResourceProject } from "./resource_project.model";

export interface Resource {
    id: string;
    name: string;
    type: string;
    amount: number | null;
    description: string | null;
    resource_project: ResourceProject[];  // Relación con ResourceProject
  }