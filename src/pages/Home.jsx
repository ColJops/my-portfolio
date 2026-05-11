import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TechStack from "../components/TechStack";
import Reveal from "../components/Reveal";
import cyb4 from "../assets/gfx/cyb4.jpg";
import prog6 from "../assets/gfx/prog6.jpg";
import prog2 from "../assets/gfx/prog2.jpg";
import { useTranslations } from "../utils/translations";
import SiteInfo from "../components/SiteInfo";

export default function Home() {
  const navigate = useNavigate();
  const t = useTranslations();

  return (
    <>
      <section className="px-5 sm:px-8 py-14 md:py-20 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center min-h-[80vh] overflow-hidden">
        <Reveal direction="left">
        <div className="min-w-0">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.8rem] font-bold leading-[1.08] pb-2">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              {t("home.title")}
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg sm:text-xl">
            <span className="text-cyan-400">{t("home.techLine.react")}</span>{" "}
            •{" "}
            <span className="text-purple-400">
              {t("home.techLine.java")}
            </span>{" "}
            •{" "}
            <span className="text-pink-400">
              {t("home.techLine.gameDev")}
            </span>
          </p>
          <SiteInfo />
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            
            <button
              type="button"
              onClick={() => navigate("/projekty")}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {t("home.projectsBtn")}
            </button>

            <button
              type="button"
              onClick={() => navigate("/o-mnie#kontakt")}
              className="px-8 py-3 border border-zinc-700 rounded-lg hover:border-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {t("home.contactBtn")}
            </button>
          </div>
        </div>
        </Reveal>

        <Reveal direction="right" delay={0.15}>
          <motion.img
            src={cyb4}
            alt="cyber"
            whileHover={{
              scale: 1.03,
              rotate: -0.5,
            }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto rounded-xl border border-zinc-800 shadow-2xl"
          />
        </Reveal>
      </section>

        <section className="px-5 sm:px-8 py-14 md:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center overflow-hidden">
          <Reveal direction="left">
            <TechStack />
          </Reveal>
          <Reveal direction="right" delay={0.15}>
          <img
            src={prog6}
            alt="programming"
            className="w-full max-w-md mx-auto lg:ml-auto rounded-xl border border-zinc-800 shadow-lg hover:scale-105 transition duration-500"
          />
          </Reveal>
        </section>

      <section className="px-5 sm:px-8 py-14 md:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center overflow-hidden">
      <Reveal direction="left">
        <img
          src={prog2}
          alt="project"
          className="w-full max-w-md mx-auto lg:mx-0 rounded-xl border border-zinc-800 shadow-lg hover:scale-105 transition duration-500"
        />
      </Reveal>

      <Reveal direction="right" delay={0.15}>
        <div className="min-w-0">
          <h2 className="text-3xl font-bold mb-4">
            {t("home.currentProject")}
          </h2>

          <h3 className="text-2xl font-semibold text-white">
            {t("projects.dungeonCrawl.name")}
          </h3>

          <p className="text-zinc-400 mt-4">
            {t("home.currentProjectDescription")}
          </p>

          <button
            type="button"
            onClick={() => navigate("/projekty/1")}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {t("home.detailsBtn")}
          </button>
        </div>
      </Reveal>
    </section>
    </>
  );
}