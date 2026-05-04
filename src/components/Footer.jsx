import { useEffect, useState } from "react";
import reactLogo from "../assets/logo/react.svg";
import viteLogo from "../assets/logo/vite.svg";

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="mt-20 border-t border-zinc-800 bg-zinc-900/60 backdrop-blur px-8 py-6">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Data i czas */}
        <div className="text-zinc-400 text-sm">
          {time.toLocaleDateString()} • {time.toLocaleTimeString()} © {new Date().getFullYear()} Daniel Kupracz
        </div>

        {/* Technologie */}
        <div className="flex items-center gap-4">
          <span className="text-zinc-300 text-sm">
            Built with <span className="text-cyan-400">❤</span>
        </span>

          <img
            src={reactLogo}
            alt="React"
            className="w-6 h-6 hover:scale-110 transition"
          />

          <img
            src={viteLogo}
            alt="Vite"
            className="w-6 h-6 hover:scale-110 transition"
          />
        </div>

      </div>
    </footer>
  );
}