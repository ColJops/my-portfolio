import { Link } from "react-router-dom";
import { useTranslations } from "../utils/translations";
import { ROUTES } from "../config/routes";

export default function NotFound({ project = false }) {
  const t = useTranslations();
  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        {t(project ? "projectDetails.notFound" : "notFound.title")}
      </h1>
      <Link className="text-cyan-400 underline" to={project ? ROUTES.projects : ROUTES.home}>
        {t(project ? "projectDetails.backToProjects" : "notFound.backHome")}
      </Link>
    </section>
  );
}
