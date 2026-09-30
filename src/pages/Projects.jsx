import AnimatedProjectGrid from "../components/AnimatedProjectGrid";
import GithubArchive from "../components/GithubArchive";
import { projects, projectStatusOrder } from "../data/projects";
import cyb3 from "../assets/gfx/cyb3.jpg";
import { useTranslations } from "../utils/translations";

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
          loading="lazy"
          className="w-full max-w-md rounded-xl border border-zinc-800 shadow-lg hover:scale-105 transition duration-500"
        />

        <h2 className="text-3xl font-semibold text-center md:text-left">
          {t("projectsPage.title")}
        </h2>
      </div>

      <div className="space-y-12">
        {projectStatusOrder.map((status) => {
          const statusProjects = mainProjects.filter((project) => project.status === status);
          if (statusProjects.length === 0) return null;

          return (
            <section key={status} aria-labelledby={`project-status-${status}`}>
              <h3
                id={`project-status-${status}`}
                className="text-2xl font-semibold mb-6 text-zinc-400"
              >
                {t(`projectStatuses.${status}`)}
              </h3>
              <AnimatedProjectGrid projects={statusProjects} delayMultiplier={0.12} />
            </section>
          );
        })}
      </div>

      <div className="my-16 border-t border-zinc-800" />

      <h2 className="text-2xl font-semibold mb-6 text-zinc-400">
        {t("projectsPage.courseTitle")}
      </h2>

      <AnimatedProjectGrid
        projects={courseProjects}
        delayMultiplier={0.08}
        className="opacity-80"
      />

      <GithubArchive />
    </section>
  );
}
