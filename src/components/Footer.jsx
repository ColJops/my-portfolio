import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../config/routes";
import reactLogo from "../assets/logo/react.svg";
import { SiOpenai, SiTailwindcss } from "react-icons/si";
import { useTranslations } from "../utils/translations";

export default function Footer() {
  const t = useTranslations();
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
        <div className="text-zinc-400 text-sm">
          {time.toLocaleDateString()} • {time.toLocaleTimeString()} © {new Date().getFullYear()} Daniel Kupracz
        </div>

        <Link
          to={ROUTES.updates}
          className="text-sm text-cyan-400 underline underline-offset-4 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
        >
          {t("updatesPage.title")}
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-zinc-300 text-sm">
            {t("footer.builtWith")} <span className="text-cyan-400">❤</span>
          </span>

          <img src={reactLogo} alt="React" title="React" className="w-6 h-6 hover:scale-110 transition" />
          <SiTailwindcss aria-label="Tailwind CSS" title="Tailwind CSS" className="w-6 h-6 text-sky-400 hover:scale-110 transition" />
          <SiOpenai aria-label="ChatGPT" title="ChatGPT" className="w-6 h-6 text-zinc-200 hover:scale-110 transition" />
        </div>
      </div>
    </footer>
  );
}
