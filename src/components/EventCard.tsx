import type { GameEvent } from "../types";

interface Props {
  event: GameEvent;
}

const leanStyles: Record<GameEvent["lean"], string> = {
  IMSA: "bg-imsa/15 text-imsa border-imsa/30",
  OMSA: "bg-omsa/15 text-omsa border-omsa/30",
  Even: "bg-slate-700/40 text-slate-300 border-slate-600/50",
};

const statusStyles: Record<GameEvent["status"], string> = {
  pending: "bg-slate-800 text-slate-400",
  IMSA: "bg-imsa text-white",
  OMSA: "bg-omsa text-white",
  tied: "bg-slate-500 text-white",
};

const statusLabel: Record<GameEvent["status"], string> = {
  pending: "Pending",
  IMSA: "IMSA Won",
  OMSA: "OMSA Won",
  tied: "Tied",
};

const cardBorder: Record<GameEvent["status"], string> = {
  pending: "border-slate-800",
  IMSA: "border-imsa/60",
  OMSA: "border-omsa/60",
  tied: "border-slate-500/60",
};

export default function EventCard({ event }: Props) {
  const borderClass = event.isNext
    ? "border-amber-400 ring-1 ring-amber-400/40 shadow-[0_0_20px_-4px_rgba(251,191,36,0.5)]"
    : cardBorder[event.status];
  const bgClass = event.isNext
    ? "bg-amber-400/[0.12] hover:bg-amber-400/[0.16]"
    : "bg-slate-900/60 hover:bg-slate-900";
  return (
    <article
      className={`rounded-xl border ${borderClass} ${bgClass} p-5 transition`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-slate-100 leading-tight">
          {event.name}
        </h3>
        <div className="flex shrink-0 items-center gap-2">
          {event.isNext && (
            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border bg-amber-400/15 text-amber-300 border-amber-400/40">
              Up Next
            </span>
          )}
          <span
            className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${leanStyles[event.lean]}`}
          >
            {event.lean === "Even" ? "Even" : `Favors ${event.lean}`}
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyles[event.status]}`}
        >
          {statusLabel[event.status]}
        </span>
        {event.scheduledFor && (
          <span className="text-[11px] text-slate-500">
            {event.scheduledFor}
          </span>
        )}
      </div>
      {event.notes && (
        <p className="mt-3 text-sm text-slate-400">{event.notes}</p>
      )}
    </article>
  );
}
