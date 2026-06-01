import { useEffect, useState } from "react";
import { buildInfo } from "../data/buildInfo";

export default function SiteInfo() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const currentVisits = Number(localStorage.getItem("visitCount") || 0) + 1;
    localStorage.setItem("visitCount", String(currentVisits));
    setVisits(currentVisits);
  }, []);

  const formattedDate = new Date(buildInfo.lastUpdated).toLocaleDateString(
    "pl-PL",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return (
    <section className="text-center text-sm text-gray-400 py-6">
      <p>Ostatnia aktualizacja strony: {formattedDate}</p>
      <p>Liczba Twoich odwiedzin: {visits}</p>
    </section>
  );
}