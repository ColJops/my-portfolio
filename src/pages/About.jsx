import { motion } from "framer-motion";
import progImg from "../assets/gfx/prog1.jpg";
import cybImg from "../assets/gfx/cyb1.jpg";

export default function About() {
  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-6"
      >
        O mnie
      </motion.h1>

      {/* OPIS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-zinc-400 space-y-4 text-lg leading-relaxed"
      >
        <p>
          Jestem developerem skupionym na tworzeniu aplikacji oraz gier,
          głównie w Javie i React.
        </p>

        <p>
          Interesuję się architekturą systemów, logiką backendową oraz
          mechanikami gameplayowymi — szczególnie w projektach typu RPG.
        </p>

        <p>
          Obecnie podjąłem studia na kierunku <span className="text-cyan-400">cyberbezpieczeństwo </span> 
           i planuję rozwijać się również w tym obszarze.
        </p>
      </motion.div>

      {/* DLACZEGO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 grid md:grid-cols-2 gap-8 items-center"
      >
        {/* 🖼️ obraz */}
        <img
          src={progImg}
          alt="programowanie"
          className="rounded-xl border border-zinc-800 shadow-lg hover:scale-105 transition duration-500 brightness-90 hover:brightness-110"
        />
        {/* 📄 tekst */}
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Dlaczego programowanie?
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Programowanie daje mi możliwość tworzenia złożonych systemów od podstaw,
            rozwiązywania problemów i budowania rzeczy, które mają realne zastosowanie.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 grid md:grid-cols-2 gap-8 items-center"
      >
        {/* 📄 tekst */}
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Cyberbezpieczeństwo
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Cyberbezpieczeństwo traktuję jako naturalne rozszerzenie wiedzy programistycznej —
            pozwala zrozumieć, jak systemy działają „od środka” i jak je skutecznie zabezpieczać.
          </p>
        </div>

        {/* 🖼️ obraz */}
        <img
          src={cybImg}
          alt="cybersecurity"
          className="rounded-xl border border-zinc-800 shadow-lg hover:scale-105 transition duration-500 brightness-90 hover:brightness-110"
        />
      </motion.div>

      {/* AKTUALNIE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-xl"
      >
        <h2 className="text-xl font-semibold mb-4 text-white">
          Aktualnie
        </h2>

        <ul className="text-zinc-400 space-y-2">
          <li>• Rozwijam grę RPG (Dungeon Crawl)</li>
          <li>• Tworzę system zapisu i odczytu stanu gry</li>
          <li>• Implementuję AI przeciwników</li>
          <li>• Rozwijam wiedzę z zakresu cyberbezpieczeństwa</li>
        </ul>
      </motion.div>

      {/* SOFT SKILLS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12"
      >
        <h2 className="text-xl font-semibold mb-4 text-white">
          Soft skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Rozwiązywanie problemów",
            "Samodzielność",
            "Analityczne myślenie",
            "Praca zespołowa",
            "Komunikacja",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300 hover:border-cyan-400 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* KONTAKT */}
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-16 p-6 bg-zinc-900 border border-zinc-800 rounded-xl"
      >
        <h2 className="text-xl font-semibold mb-4 text-white">
          Kontakt
        </h2>

        <div  id="kontakt" className="space-y-2 text-zinc-400">
          <p>📧 dkupracz@dkupracz.cba.pl</p>
          <p>
            💻 <a href="https://github.com/ColJops" target="_blank" className="text-cyan-400">GitHub</a>
          </p>
          <p>
            🔗 <a href="https://www.linkedin.com/in/daniel-kupracz-73961827b" target="_blank" className="text-cyan-400">LinkedIn</a>
          </p>
        </div>
      </motion.div>

    </section>
  );
}