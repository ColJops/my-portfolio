import { Link } from "react-router-dom";
import { getProjectDetailsPath } from "../config/routes";
import { useTranslations } from "../utils/translations";

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] fill-current"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.01c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92v2.85c0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  const t = useTranslations();

  const translatedProject = project.translationKey
    ? t(`projects.${project.translationKey}`)
    : null;

  const name = translatedProject?.name || project.name;
  const desc = translatedProject?.desc || project.desc;

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-zinc-900/60
        p-6
        shadow-lg
        backdrop-blur-md
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:bg-white/[0.07]
        hover:shadow-cyan-500/10
        hover:shadow-2xl
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-cyan-400/10
          via-purple-500/10
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -top-24
          -right-24
          h-48
          w-48
          rounded-full
          bg-cyan-400/10
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        {project.image && (
          <div className="mb-5 overflow-hidden rounded-xl border border-white/10">
            <img
              src={project.image}
              alt={name}
              loading="lazy"
              className="
                h-48
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-105
              "
            />
          </div>
        )}

        <div className="mb-3 flex flex-wrap items-center gap-2">
          <h3 className="text-xl font-bold text-white">
            {name}
          </h3>

          {project.category === "course" && (
            <span className="rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-semibold text-yellow-400">
              {t("projectCard.courseBadge")}
            </span>
          )}
        </div>

        {desc && <p className="text-zinc-400 leading-relaxed">{desc}</p>}

        {project.tech?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-md
                  bg-white/10
                  px-2.5
                  py-1
                  text-xs
                  text-zinc-200
                  transition
                  group-hover:bg-cyan-400/10
                  group-hover:text-cyan-200
                "
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            to={getProjectDetailsPath(project.id)}
            className="
              inline-flex
              items-center
              justify-center
              rounded-lg
              bg-gradient-to-r
              from-cyan-500
              to-purple-500
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              transition
              hover:scale-105
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
            "
          >
            {t("home.detailsBtn")}
          </Link>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-cyan-400
                transition
                hover:text-cyan-300
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-400
                rounded
              "
            >
              <GitHubIcon />
              {t("projectCard.repository")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}