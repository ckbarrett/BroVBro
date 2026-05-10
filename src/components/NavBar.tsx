import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-1.5 rounded-md text-sm font-medium transition ${
    isActive
      ? "bg-slate-800 text-white"
      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
  }`;

export default function NavBar() {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="font-black tracking-tight text-lg">
            <span className="text-imsa">Bro</span>
            <span className="text-slate-400">V</span>
            <span className="text-omsa">Bro</span>
          </span>
          <span className="hidden sm:inline text-xs text-slate-500 group-hover:text-slate-300 transition">
            Summer 2026
          </span>
        </NavLink>
        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>
            Standings
          </NavLink>
          <NavLink to="/competitors" className={linkClass}>
            Competitors
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
