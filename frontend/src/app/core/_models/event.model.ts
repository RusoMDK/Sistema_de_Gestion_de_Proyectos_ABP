import { CommunityDevelopment } from "./community_development.model";
import { Project } from "./project.model";
import { Reunion } from "./reunion.model";
import { SensitizationActivities } from "./sensitization_activities.model";

export interface Event {
    id: string;
    name: string;
    description: string;
    type: string;
    start_date: Date;
    end_date: Date | null;
    project: Project;  // Relación con Project
    community_development: CommunityDevelopment[];
    reunion: Reunion[];
    sensitization_activities: SensitizationActivities[];
  }