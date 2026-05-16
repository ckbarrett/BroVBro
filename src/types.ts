export type Team = "IMSA" | "OMSA";
export type Lean = "IMSA" | "OMSA" | "Even";
export type Status = "pending" | "IMSA" | "OMSA" | "tied";

export interface GameEvent {
  id: string;
  name: string;
  lean: Lean;
  status: Status;
  isNext?: boolean;
  scheduledFor?: string;
  notes?: string;
}

export interface Competitor {
  name: string;
  team: Team;
  blurb: string;
}
