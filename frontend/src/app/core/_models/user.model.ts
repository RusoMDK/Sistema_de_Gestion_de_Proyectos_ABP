import { Project } from "./project.model";

export interface User {
    id: string;
    name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    role: {
      name: string;
    };  // Relación con Role
    project: Project[];  // Relación con Project
    permissions: string;
    modules: string; // O el tipo adecuado si no es string
  }