import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TechStack from "../components/TechStack";
import Reveal from "../components/Reveal";
import cyb4 from "../assets/gfx/cyb4.jpg";
import prog6 from "../assets/gfx/prog6.jpg";
import prog2 from "../assets/gfx/prog2.jpg";
import { t } from "../utils/translations";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* 🔥 HERO */}
      <section className="px-8 py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center min-h-[80vh]">
        
        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              {t("home.title")}
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg">
            <span className="text-cyan-400">React</span> •{" "}
            <span className="text-purple-400">Java</span> •{" "}
            <span className="text-pink-400">Game Dev</span>
          </p>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => navigate("/projekty")}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:scale-105 transition"
            >
              {t("home.projectsBtn")}
            </button>

            <button
              onClick={() => navigate("/o-mnie#kontakt")}
              className="px-8 py-3 border border-zinc-700 rounded-lg hover:border-cyan-400 transition"
            >
              {t("home.contactBtn")}
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.img
          src={cyb4}
          alt="cyber"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg mx-auto rounded-xl border border-zinc-800 shadow-2xl 
          hover:scale-105 transition duration-500"
        />
      </section>

      {/* 🔥 TECH STACK */}
      <Reveal>
        <section className="px-8 py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <TechStack />

          {/* RIGHT */}
          <img
            src={prog6}
            alt="programming"
            className="w-full max-w-md ml-auto rounded-xl border border-zinc-800 shadow-lg 
            hover:scale-105 transition duration-500"
          />
        </section>
      </Reveal>

      {/* 🔥 FEATURED PROJECT */}
      <Reveal>
        <section className="px-8 py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE */}
          <img
            src={prog2}
            alt="project"
            className="w-full max-w-md rounded-xl border border-zinc-800 shadow-lg 
            hover:scale-105 transition duration-500"
          />

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Aktualny projekt
            </h2>

            <h3 className="text-2xl font-semibold text-white">
              Dungeon Crawl
            </h3>

            <p className="text-zinc-400 mt-4">
              Gra RPG tworzona w Javie z systemem zapisu, AI przeciwników i eksploracją dungeonów.
            </p>

            <button
              onClick={() => navigate("/projekty/1")}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:scale-105 transition"
            >
              Zobacz szczegóły
            </button>
          </div>
        </section>
      </Reveal>
    </>
  );
}