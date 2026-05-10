import type { Competitor } from "../types";

interface Props {
  competitor: Competitor;
}

export default function CompetitorCard({ competitor }: Props) {
  const accent =
    competitor.team === "IMSA"
      ? "border-imsa/40 bg-imsa/5"
      : "border-omsa/40 bg-omsa/5";
  const teamText =
    competitor.team === "IMSA" ? "text-imsa" : "text-omsa";
  return (
    <article
      className={`rounded-xl border ${accent} p-5 sm:p-6 backdrop-blur-sm`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-2xl font-black tracking-tight">{competitor.name}</h3>
        <span className={`text-xs font-bold uppercase tracking-widest ${teamText}`}>
          {competitor.team}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        {competitor.blurb}
      </p>
    </article>
  );
}
