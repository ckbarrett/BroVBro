import type { Standings } from "../lib/standings";

interface Props {
  standings: Standings;
}

export default function StandingsBar({ standings }: Props) {
  const { imsa, omsa, tied, pending, total } = standings;
  const decided = imsa + omsa + tied;
  const imsaPct = total ? (imsa / total) * 100 : 0;
  const omsaPct = total ? (omsa / total) * 100 : 0;
  const tiedPct = total ? (tied / total) * 100 : 0;

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 shadow-lg">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div className="flex items-baseline gap-3">
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-imsa font-semibold">
              IMSA
            </div>
            <div className="text-5xl sm:text-6xl font-black text-imsa">
              {imsa}
            </div>
            <div className="text-[10px] text-slate-500 mt-1">
              Eli · Christian
            </div>
          </div>
          <div className="text-3xl font-black text-slate-600 mx-2">–</div>
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-omsa font-semibold">
              OMSA
            </div>
            <div className="text-5xl sm:text-6xl font-black text-omsa">
              {omsa}
            </div>
            <div className="text-[10px] text-slate-500 mt-1">Clark · Jake</div>
          </div>
        </div>
        <div className="text-sm text-slate-400 space-y-0.5">
          <div>
            <span className="text-slate-200 font-semibold">{decided}</span> /{" "}
            {total} events decided
          </div>
          {tied > 0 && (
            <div>
              <span className="text-slate-200">{tied}</span> tied
            </div>
          )}
          <div>
            <span className="text-slate-200">{pending}</span> pending
          </div>
        </div>
      </div>
      <div className="mt-6 h-3 w-full rounded-full overflow-hidden bg-slate-800 flex">
        <div
          className="bg-imsa transition-all"
          style={{ width: `${imsaPct}%` }}
        />
        <div
          className="bg-slate-500 transition-all"
          style={{ width: `${tiedPct}%` }}
        />
        <div
          className="bg-omsa transition-all ml-auto"
          style={{ width: `${omsaPct}%` }}
        />
      </div>
    </section>
  );
}
