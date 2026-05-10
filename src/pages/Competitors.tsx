import { competitors } from "../data/competitors";
import CompetitorCard from "../components/CompetitorCard";

export default function Competitors() {
  const imsa = competitors.filter((c) => c.team === "IMSA");
  const omsa = competitors.filter((c) => c.team === "OMSA");

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          The Competitors
        </h1>
        <p className="text-slate-400">Four players. Two teams. Pick your side.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-imsa">
            Team IMSA
          </h2>
          <div className="space-y-4">
            {imsa.map((c) => (
              <CompetitorCard key={c.name} competitor={c} />
            ))}
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-omsa">
            Team OMSA
          </h2>
          <div className="space-y-4">
            {omsa.map((c) => (
              <CompetitorCard key={c.name} competitor={c} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
