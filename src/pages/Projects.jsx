import ProjectCard from "../components/ProjectCard";
import GithubArchive from "../components/GithubArchive";
import { projects } from "../data/projects";
import cyb3 from "../assets/gfx/cyb3.jpg";
import { useTranslations } from "../utils/translations";
import { motion } from "framer-motion";

export default function Projects() {
  const t = useTranslations();

  const mainProjects = projects.filter((p) => p.category !== "course");
  const courseProjects = projects.filter((p) => p.category === "course");

  return (
    <section className="px-5 sm:px-8 py-16 md:py-20 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
        <img
          src={cyb3}
          alt={t("projectsPage.imageAlt")}
          className="w-full max-w-md rounded-xl border border-zinc-800 shadow-lg hover:scale-105 transition duration-500"
        />

        <h2 className="text-3xl font-semibold text-center md:text-left">
          {t("projectsPage.title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mainProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1  }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
              ease: "easeOut",
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <div className="my-16 border-t border-zinc-800" />

      <h2 className="text-2xl font-semibold mb-6 text-zinc-400">
        {t("projectsPage.courseTitle")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80">
        {courseProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <GithubArchive />
    </section>
  );
}