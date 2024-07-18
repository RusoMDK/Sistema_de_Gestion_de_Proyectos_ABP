export interface CommunityDevelopment {
    id: string;
    created_at: Date;
    updated_at: Date;
    event: Event;  // Relación con Event
  }