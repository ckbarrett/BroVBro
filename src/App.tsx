import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        <Outlet />
      </main>
      <footer className="py-6 text-center text-xs text-slate-500">
        BroVBro · Summer 2026
      </footer>
    </div>
  );
}
