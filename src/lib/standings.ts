import type { GameEvent } from "../types";

export interface Standings {
  imsa: number;
  omsa: number;
  tied: number;
  pending: number;
  total: number;
}

export function computeStandings(events: GameEvent[]): Standings {
  const s: Standings = {
    imsa: 0,
    omsa: 0,
    tied: 0,
    pending: 0,
    total: events.length,
  };
  for (const e of events) {
    if (e.status === "IMSA") s.imsa++;
    else if (e.status === "OMSA") s.omsa++;
    else if (e.status === "tied") s.tied++;
    else s.pending++;
  }
  return s;
}
