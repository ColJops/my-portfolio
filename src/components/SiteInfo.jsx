import { Link } from "react-router-dom";
import { updates, formatUpdateDate } from "../data/updates";
import { ROUTES } from "../config/routes";
import { visits } from "../utils/visits";
import { useLang } from "../context/LanguageContext";
import { useTranslations } from "../utils/translations";

export default function SiteInfo() {
  const { lang } = useLang();
  const t = useTranslations();

  const latestUpdate = updates[0];

  return (
    <section className="text-center text-sm text-gray-400 py-6">
      {latestUpdate && (
        <p>
          {t("siteInfo.lastUpdated")}: {" "}
          <time dateTime={latestUpdate.date}>{formatUpdateDate(latestUpdate.date, lang)}</time>
        </p>
      )}
      <Link
        to={ROUTES.updates}
        className="inline-block mt-1 mb-2 text-cyan-400 underline underline-offset-4 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
      >
        {t("updatesPage.title")}
      </Link>
      <p>{t("siteInfo.visits")}: {visits}</p>
    </section>
  );
}
