import { Activity } from "./activity.model";
import { Member } from "./member.model";

export interface MemberActivity {
    id: string;
    created_at: Date;
    updated_at: Date;
    member: Member;  // Relación con Member
    activity: Activity;  // Relación con Activity
  }