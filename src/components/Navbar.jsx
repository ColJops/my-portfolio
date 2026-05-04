import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-zinc-900/80 backdrop-blur border-b border-zinc-800 sticky top-0 z-50">
      <h1 className="text-xl font-bold tracking-wide">
        <span className="text-cyan-400">Daniel Kupracz </span> Dev
      </h1>

      <div className="flex gap-6 text-sm">
        <Link className="hover:text-cyan-400 transition" to="/">Start</Link>
        <Link className="hover:text-cyan-400 transition" to="/o-mnie">O mnie</Link>
        <Link className="hover:text-cyan-400 transition" to="/projekty">Projekty</Link>
      </div>
    </nav>
  );
}