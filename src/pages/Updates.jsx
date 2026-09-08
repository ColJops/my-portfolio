import { Link } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { useLang } from "../context/LanguageContext";
import { updates, formatUpdateDate } from "../data/updates";
import { useTranslations } from "../utils/translations";

export default function Updates() {
  const { lang } = useLang();
  const t = useTranslations();

  return (
    <main className="px-5 sm:px-8 py-14 md:py-20 max-w-4xl mx-auto">
      <Link
        to={ROUTES.home}
        className="inline-flex items-center gap-2 mb-8 text-sm text-cyan-400 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
      >
        <span aria-hidden="true">←</span> {t("updatesPage.backHome")}
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        {t("updatesPage.title")}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-zinc-400 leading-relaxed">
        {t("updatesPage.description")}
      </p>

      <ol className="mt-12 ml-2 border-l border-zinc-700 space-y-10">
        {updates.map((update, index) => {
          const content = update[lang];
          return (
            <li key={update.id} className="relative pl-6 sm:pl-10">
              <span aria-hidden="true" className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-cyan-400 ring-4 ring-zinc-950" />
              <article aria-labelledby={`update-${update.id}`}>
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                  <time dateTime={update.date} className="text-zinc-400">
                    {formatUpdateDate(update.date, lang)}
                  </time>
                  {index === 0 && (
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-300">
                      {t("updatesPage.latest")}
                    </span>
                  )}
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-8">
                  <h2 id={`update-${update.id}`} className="text-2xl font-semibold leading-snug">
                    {content.title}
                  </h2>
                  <ul className="mt-6 list-disc pl-5 space-y-3 text-zinc-300 leading-relaxed marker:text-cyan-400">
                    {content.changes.map((change) => <li key={change}>{change}</li>)}
                  </ul>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
