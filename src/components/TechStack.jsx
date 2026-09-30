import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTypescript,
  SiSpringboot,
  SiDjango,
  SiPostgresql,
  SiJira,
  SiOpenai,
} from "react-icons/si";

import { DiPython } from "react-icons/di";
import { useTranslations } from "../utils/translations";

const tech = {
  frontend: [
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-400" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-400" },
  ],
  backend: [
    { name: "Java", icon: <FaJava />, color: "text-orange-500" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-400" },
    { name: "Django", icon: <SiDjango />, color: "text-green-500" },
    { name: "Python", icon: <DiPython />, color: "text-yellow-300" },
  ],
  databases: [
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
    { name: "Microsoft SQL", icon: <FaDatabase />, color: "text-red-400" },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
    { name: "Jira", icon: <SiJira />, color: "text-blue-300" },
    { name: "Mockito", icon: "🧪", color: "text-pink-400" },
    { nameKey: "techStack.aiLiteracy", detailKey: "techStack.aiLiteracyDescription", icon: <SiOpenai />, color: "text-emerald-400" },
  ],
};

export default function TechStack() {
  const t = useTranslations();

  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        {t("techStack.title")}
      </h2>

      <div className="space-y-12">
        {Object.entries(tech).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl text-zinc-400 mb-4">
              {t(`techStack.categories.${category}`)}
            </h3>

            <div className="flex flex-wrap gap-4">
                {items.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition cursor-default"
                >
                  <span className={`text-xl ${item.color}`}>{item.icon}</span>
                    <div className="flex flex-col">
                      <span className="text-zinc-200">{item.nameKey ? t(item.nameKey) : item.name}</span>
                      {item.detailKey && (
                        <span className="max-w-56 text-xs leading-relaxed text-zinc-400">
                          {t(item.detailKey)}
                        </span>
                      )}
                    </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
