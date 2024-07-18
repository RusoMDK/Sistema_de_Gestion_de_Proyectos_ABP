import { MemberActivity } from "./member_activity.model";
import { Task } from "./task.model";

export interface Activity {
    id: string;
    name: string;
    description: string;
    start_date: Date;
    estimated_end_date: Date;
    end_date?: Date | null;
    task: Task;  // Relación con Task
    member_activity: MemberActivity[];  // Relación con MemberActivity
  }