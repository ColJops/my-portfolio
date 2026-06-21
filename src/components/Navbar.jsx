import { Link, NavLink } from "react-router-dom";
import FlagPL from "./FlagPL";
import FlagEN from "./FlagEN";
import { useLang } from "../context/LanguageContext";
import { useTranslations } from "../utils/translations";
import { motion } from "framer-motion";
import { ROUTES } from "../config/routes";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const t = useTranslations();
  const navLinks = [
    {
      to: ROUTES.home,
      label: t("nav.home"),
      end: true,
    },
    {
      to: ROUTES.about,
      label: t("nav.about"),
    },
    {
      to: ROUTES.projects,
      label: t("nav.projects"),
    },
  ];

  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center px-4 md:px-8 py-5 bg-zinc-900/80 backdrop-blur border-b border-zinc-800 sticky top-0 z-50">
      <Link
        to="/"
        aria-label="Homepage"
        className="text-2xl font-bold tracking-wide text-center md:text-left focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
      >
        <span className="text-cyan-400">Daniel Kupracz </span>
        Dev Portfolio
      </Link>

      <div className="flex items-center gap-3 md:ml-6">
        <button
          type="button"
          aria-label="Zmień język na polski"
          aria-pressed={lang === "pl"}
          onClick={() => setLang("pl")}
          className={`p-1 rounded-md transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
            lang === "pl" ? "ring-2 ring-cyan-400" : "opacity-70"
          }`}
        >
          <FlagPL />
        </button>

        <button
          type="button"
          aria-label="Change language to English"
          aria-pressed={lang === "en"}
          onClick={() => setLang("en")}
          className={`p-1 rounded-md transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
            lang === "en" ? "ring-2 ring-cyan-400" : "opacity-70"
          }`}
        >
          <FlagEN />
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-base md:text-lg font-medium">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => `
              relative
              px-1
              pb-1
              transition
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
              rounded
              ${isActive ? "text-cyan-400" : "text-zinc-300 hover:text-cyan-400"}
            `}
          >
            {({ isActive }) => (
              <>
                {link.label}

                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}