import { MemberActivity } from "./member_activity.model";
import { Project } from "./project.model";

export interface Member {
    id: string;
    name: string;
    last_name: string;
    ocupation: string | null;
    project: Project;  // Relación con Project
    member_activity: MemberActivity[];  // Relación con MemberActivity
  }