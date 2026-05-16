import type { GameEvent } from "../types";

export const events: GameEvent[] = [
  { id: "disc-golf", name: "Disc Golf (Scramble)", lean: "IMSA", status: "pending" },
  { id: "boomerang-fu", name: "Boomerang Fu", lean: "Even", status: "pending" },
  { id: "spikeball", name: "Spikeball", lean: "Even", status: "pending" },
  { id: "2s-beach", name: "2s Beach Volleyball", lean: "IMSA", status: "pending" },
  { id: "rocket-league", name: "Rocket League", lean: "Even", status: "pending", isNext: true },
  { id: "csgo-wingman", name: "CS:GO Wingman", lean: "IMSA", status: "pending" },
  { id: "golf-sim", name: "Golf Sim", lean: "OMSA", status: "pending" },
  { id: "pickleball", name: "Pickleball", lean: "Even", status: "pending" },
  { id: "league", name: "League of Legends", lean: "OMSA", status: "pending" },
  { id: "beerio-kart", name: "Beerio Kart", lean: "OMSA", status: "pending" },
  { id: "ultimate-chicken-horse", name: "Ultimate Chicken Horse", lean: "Even", status: "pending" },
];
