import { User } from './user.model';
import { Member } from './member.model';
import { Task } from './task.model';
import { Event } from './event.model';
import { ResourceProject } from './resource_project.model';
import { Infrastructure } from './infrastructure.model';
import { CommunityWork } from './community_work.model';
import { TrainingCourse } from './training_course.model';
import { SocioeconomicActivities } from './socioeconomic_activities.model';

export interface Project {
  id: string;
  name: string;
  description: string;
  type: string;
  author_name: string;
  start_date: Date;
  estimated_end_date: Date;
  end_date?: Date | null;
  user: User;  // Relación con User
  member: Member[];  // Relación con Member
  task: Task[];  // Relación con Task
  event: Event[];  // Relación con Event
  resource_project: ResourceProject[];  // Relación con ResourceProject
  infrastructure: Infrastructure[];  // Relación con Infrastructure
  community_work: CommunityWork[];  // Relación con CommunityWork
  training_course: TrainingCourse[];  // Relación con TrainingCourse
  socioeconomic_activities: SocioeconomicActivities[];  // Relación con SocioeconomicActivities
}