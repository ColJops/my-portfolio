import { useEffect, useState } from "react";
import { useTranslations } from "../utils/translations";

function CommitSkeleton() {
  return (
    <div className="relative border-l border-zinc-800 pl-6 space-y-8">
      {[1, 2, 3].map((item) => (
        <div key={item} className="relative">
          <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-zinc-900 bg-zinc-700 animate-pulse" />

          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4 animate-pulse">
            <div className="h-4 w-4/5 rounded bg-zinc-700 mb-4" />
            <div className="h-3 w-1/3 rounded bg-zinc-800" />
          </div>
        </div>
      ))}
    </div>
  );
}

function getCommitTimeText(dateString, t) {
  const now = new Date();
  const date = new Date(dateString);

  // Tworzymy obiekty dat z wyzerowaną godziną, aby porównywać dni kalendarzowe
  const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const commitDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const diffTime = nowDate.getTime() - commitDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return t("commits.today");
  }

  if (diffDays === 1) {
    return t("commits.yesterday");
  }

  return `${diffDays} ${t("commits.daysAgo")}`;
}

export default function CommitList({ owner, repo, onLatestCommit }) {
  const t = useTranslations();

  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(Boolean(owner && repo));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!owner || !repo) {
      return;
    }

    const controller = new AbortController();

    async function fetchCommits() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/commits?per_page=5`,
          {
            signal: controller.signal,
          }
        );

        if (!res.ok) {
          if (res.status === 403) {
            throw new Error(
              t("commits.rateLimit") || "GitHub API rate limit exceeded."
            );
          }

          throw new Error(t("commits.loadError"));
        }

        const data = await res.json();

        if (!Array.isArray(data)) {
          throw new Error(t("commits.loadError"));
        }

        setCommits(data);

        if (data.length > 0 && onLatestCommit) {
          onLatestCommit(data[0].commit.author.date);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("GitHub commits error:", err);
          setCommits([]);
          setError(err.message || t("commits.loadError"));
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchCommits();

    return () => {
      controller.abort();
    };
  }, [owner, repo, onLatestCommit, t]);

  if (!owner || !repo) {
    return (
      <div className="relative border-l border-zinc-800 pl-6 space-y-8">
        <div className="rounded-lg border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
          {t("commits.loadError")}
        </div>
      </div>
    );
  }

  if (loading) {
    return <CommitSkeleton />;
  }

  const commitsWithTime = commits.map((commit) => ({
    ...commit,
    timeText: getCommitTimeText(commit.commit.author.date, t),
  }));

  return (
    <div className="relative border-l border-zinc-800 pl-6 space-y-8">
      {error && (
        <div className="rounded-lg border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      {!error && commitsWithTime.length === 0 && (
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-sm text-zinc-400">
          {t("commits.empty") || "Brak commitów do wyświetlenia."}
        </div>
      )}

      {commitsWithTime.map((commit) => (
        <div key={commit.sha} className="relative">
          <div className="absolute -left-[9px] top-2 w-4 h-4 bg-cyan-400 rounded-full border-2 border-zinc-900" />

          <a
            href={commit.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block
              bg-zinc-900/80
              border
              border-zinc-800
              p-4
              rounded-lg
              backdrop-blur
              transition
              hover:-translate-y-1
              hover:border-cyan-400/50
              hover:bg-white/[0.06]
              hover:shadow-lg
              hover:shadow-cyan-500/10
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
            "
          >
            <p className="text-zinc-200 line-clamp-2">
              {commit.commit.message}
            </p>

            <p className="text-zinc-500 text-sm mt-2">
              {commit.commit.author.name} • {commit.timeText}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}