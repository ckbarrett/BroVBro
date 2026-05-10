import { events } from "../data/events";
import { computeStandings } from "../lib/standings";
import StandingsBar from "../components/StandingsBar";
import EventCard from "../components/EventCard";

export default function Home() {
  const standings = computeStandings(events);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          BroVBro <span className="text-slate-500 font-medium">— Summer 2026</span>
        </h1>
        <p className="text-slate-400 max-w-2xl">
          Eleven events. Two teams. One summer. <span className="text-imsa font-semibold">IMSA</span>{" "}
          (Eli &amp; Christian) vs <span className="text-omsa font-semibold">OMSA</span> (Clark &amp;
          Jake).
        </p>
      </header>

      <StandingsBar standings={standings} />

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
          Events
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>
    </div>
  );
}
