export interface Reunion {
    id: string;
    created_at: Date;
    updated_at: Date;
    event: Event;  // Relación con Event
  }