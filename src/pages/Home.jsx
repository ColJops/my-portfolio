import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import TechStack from "../components/TechStack";
import { FaReact, FaJava, FaGitAlt } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-center items-center text-center min-h-[80vh] px-6"
      >
        {/* 🔥 SVG ANIMACJA */}
        <motion.div
          variants={item}
          className="mb-10"
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            className="mx-auto"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="cyan"
              strokeWidth="2"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              stroke="purple"
              strokeWidth="2"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            />
          </svg>
        </motion.div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-16"></div>
        {/* 🔥 HERO */}
               <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Tworzę{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            nowoczesne aplikacje
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-zinc-400 max-w-xl text-lg"
        >
          <span className="text-cyan-400">React</span> • 
        <span className="text-purple-400"> Java</span> • 
        <span className="text-pink-400"> Game Dev </span>  
          Buduję projekty, które działają i wyglądają.
        </motion.p>

        {/* 🔥 BUTTONY */}
        <motion.div variants={item} className="mt-10 flex gap-4">
          
          <button
            onClick={() => navigate("/projekty")}
            className="relative px-8 py-3 rounded-lg font-medium overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-70 blur-lg group-hover:opacity-100 transition"></span>
            <span className="relative z-10">
              Zobacz projekty
            </span>
          </button>

          <button
            onClick={() => navigate("/o-mnie#kontakt")}
            className="px-8 py-3 border border-zinc-700 rounded-lg hover:border-cyan-400 transition"
          >
            Kontakt
        </button>
        
        </motion.div>
      </motion.section>
      <TechStack />
      {/* 🔥 FEATURED */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="px-8 py-20 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          Aktualny projekt
        </h2>

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-cyan-500/30 rounded-xl p-12 hover:border-cyan-400 transition hover:shadow-2xl hover:shadow-cyan-500/10">
          
          <h3 className="text-3xl font-semibold text-white">
            Dungeon Crawl
          </h3>

          <p className="text-zinc-400 mt-4">
            Gra RPG tworzona w Javie z systemem zapisu, AI przeciwników i eksploracją dungeonów.
          </p>

          <button
            onClick={() => navigate("/projekty")}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg"
          >
            Zobacz projekt
          </button>
        </div>
      </motion.section>

    </>
  );
}