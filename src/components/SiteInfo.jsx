import { useEffect, useState } from "react";

export default function SiteInfo() {
  const [views, setViews] = useState(null);
  const [error, setError] = useState(false);

  const lastUpdate =
    import.meta.env.VITE_LAST_UPDATE ||
    new Date().toLocaleDateString("pl-PL");

  useEffect(() => {
    async function fetchViews() {
      try {
        const res = await fetch(
          "https://api.counterapi.dev/v1/dkupracz-portfolio/homepage/up"
        );

        if (!res.ok) {
          throw new Error("Counter API error");
        }

        const data = await res.json();

        const value = data.count ?? data.value;

        if (typeof value !== "number") {
          throw new Error("Invalid counter response");
        }

        setViews(value);
      } catch (err) {
        console.error("Visitor counter error:", err);
        setError(true);
      }
    }

    fetchViews();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-zinc-400 mt-8">
      <div className="flex items-center gap-2">
        <span>◷</span>
        <span>Ostatnia aktualizacja: {lastUpdate}</span>
      </div>

      <div className="flex items-center gap-2">
        <span>⊙</span>
        <span>
          Odwiedziny:{" "}
          {error ? "niedostępne" : views !== null ? views : "..."}
        </span>
      </div>
    </div>
  );
}