import { useState, useEffect } from "react";

// Hook do obsługi zewnętrznego, trwałego licznika odwiedzin (np. CounterAPI / CountAPI)
// Dzięki temu aktualizacje strony (Vite SPA) nie resetują licznika.
export function useVisits() {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    // Klucz unikany dla Twojego portfolio (możesz wpisać własną unikalną nazwę namespace/key)
    const namespace = "daniel-kupracz-portfolio";
    const key = "visits";
    
    const incrementAndGetVisits = async () => {
      try {
        // Próbujemy zwiększyć licznik na darmowym serwerze API
        const response = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`);
        if (response.ok) {
          const data = await response.json();
          setVisits(data.count);
          return;
        }
        throw new Error("API error");
      } catch {
        // Fallback w razie awarii zewnętrznego API (np. brak internetu / blokada adblocka)
        // Sprawdzamy sessionStorage, aby nie nabijać licznika wielokrotnie w tej samej sesji przeglądarki
        const sessionKey = "portfolio_visited_session";
        let count = Number(window.localStorage.getItem("fallback_visits") || "120");
        
        if (!window.sessionStorage.getItem(sessionKey)) {
          count += 1;
          window.sessionStorage.setItem(sessionKey, "true");
          window.localStorage.setItem("fallback_visits", String(count));
        }
        setVisits(count);
      }
    };

    incrementAndGetVisits();
  }, []);

  return visits;
}