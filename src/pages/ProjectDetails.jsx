import { Link, useParams } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import NotFound from "./NotFound";
import { projects } from "../data/projects";
import CommitList from "../components/CommitList";
import { useTranslations } from "../utils/translations";
import { ROUTES } from "../config/routes";

const badgeStyles = {
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function ProjectDetails() {
  const { id } = useParams();
  const t = useTranslations();
  const project = projects.find((p) => p.id === Number(id));
  const [lastCommitDate, setLastCommitDate] = useState(null);
  
  useMemo(() => {
    setLastCommitDate(null);
  }, [id]);
  const dialogRef = useRef(null);
  const previewRef = useRef(null);
  const [currentTime] = useState(() => Date.now());

  const projectName =
    project && project.translationKey
      ? t(`projects.${project.translationKey}.name`)
      : project?.name || "";
  const projectDescription =
    project && project.translationKey
      ? t(`projects.${project.translationKey}.desc`)
      : project?.desc || "";

  const badge = useMemo(() => {
    if (!lastCommitDate) return null;

    const days = (currentTime - new Date(lastCommitDate)) / (1000 * 60 * 60 * 24);
    let label = t("projectDetails.active");
    let color = "green";

    if (days > 30) {
      label = t("projectDetails.inactive");
      color = "red";
    } else if (days > 7) {
      label = t("projectDetails.moderate");
      color = "yellow";
    }

    return { label, styles: badgeStyles[color] };
  }, [currentTime, lastCommitDate, t]);

  if (!project) return <NotFound project />;

  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">
      <Link
        to={ROUTES.projects}
        className="mb-8 inline-flex items-center gap-2 text-sm text-cyan-400 transition hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
      >
        ← {t("projectDetails.backToProjects")}
      </Link>

      <h1 className="text-4xl font-bold text-white">{projectName}</h1>

      {projectDescription && <p className="text-zinc-400 mt-4">{projectDescription}</p>}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-cyan-400"
        >
          {t("projectDetails.repository")}
        </a>
      )}

      {badge && (
        <div className={`mt-4 inline-block px-3 py-1 text-sm rounded-full border ${badge.styles}`}>
          ● {badge.label}
        </div>
      )}

      {project.image && (
        <button
          type="button"
          ref={previewRef}
          onClick={() => dialogRef.current.showModal()}
          className="mt-10 block w-full group relative rounded-xl overflow-hidden border border-zinc-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label={`${t("projectDetails.preview")}: ${projectName}`}
        >
          <img
            src={project.image}
            alt={projectName}
            className="w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition flex items-center justify-center">
            <span className="text-white text-lg font-medium">
              {t("projectDetails.preview")}
            </span>
          </span>
        </button>
      )}

      {project.github && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("projectDetails.latestCommits")}
          </h2>

          <CommitList
            owner={project.github.owner}
            repo={project.github.repo}
            onLatestCommit={setLastCommitDate}
          />
        </div>
      )}

      {project.image && (
        <dialog
          ref={dialogRef}
          onClose={() => previewRef.current?.focus()}
          className="fixed inset-0 m-auto max-w-[95vw] max-h-[95vh] p-4 rounded-xl bg-zinc-950 text-white backdrop:bg-black/80 backdrop:backdrop-blur"
          aria-label={projectName}
        >
          <form method="dialog" className="flex justify-end mb-3">
            <button autoFocus className="px-4 py-2 rounded border border-cyan-400 focus:ring-2 focus:ring-cyan-400">
              {t("projectDetails.closePreview")}
            </button>
          </form>
          <img
            src={project.image}
            alt={projectName}
            className="max-w-full max-h-[75vh] rounded-xl shadow-2xl"
          />
        </dialog>
      )}
    </section>
  );
}
