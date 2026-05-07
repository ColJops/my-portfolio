import { useEffect, useState } from "react";

export default function CommitList({ owner, repo, onLatestCommit }) {
  const [commits, setCommits] = useState([]);
  const [commitsWithTime, setCommitsWithTime] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/commits`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const latest = data.slice(0, 5);
          setCommits(latest);

          if (latest.length > 0 && onLatestCommit) {
            onLatestCommit(latest[0].commit.author.date);
          }
        } else {
          setCommits([]);
        }
      })
      .catch(() => setCommits([]));
  }, [owner, repo, onLatestCommit]);

  useEffect(() => {
    const now = Date.now();
    const withTime = commits.map(c => {
      const date = new Date(c.commit.author.date);
      const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
      let timeText = `${diff} dni temu`;
      if (diff === 0) timeText = "dzisiaj";
      else if (diff === 1) timeText = "wczoraj";
      return { ...c, timeText };
    });
    setCommitsWithTime(withTime); // eslint-disable-line react-hooks/set-state-in-effect
  }, [commits]);

  return (
    <div className="relative border-l border-zinc-800 pl-6 space-y-8">
      
      {commitsWithTime.map((c, i) => (
        <div key={i} className="relative">
          
          {/* 🔵 punkt timeline */}
          <div className="absolute -left-[9px] top-2 w-4 h-4 bg-cyan-400 rounded-full border-2 border-zinc-900"></div>

          {/* 🔥 klikany commit */}
          <a
            href={c.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-zinc-900 border border-zinc-800 p-4 rounded-lg hover:border-cyan-400 transition hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <p className="text-zinc-200">
              {c.commit.message}
            </p>

            <p className="text-zinc-500 text-sm mt-2">
              {c.commit.author.name} • {c.timeText}
            </p>
          </a>

        </div>
      ))}

    </div>
  );
}