const entries = [
  {
    id: "2026-09-30-projects-and-ai-literacy",
    date: "2026-09-30",
    pl: {
      title: "Rozbudowa sekcji projektów i umiejętności",
      changes: [
        "Pogrupowano projekty według statusu: w trakcie tworzenia, aktualizowane i zakończone.",
        "Dodano projekty Fleets i Cyberbezpieczeństwo wraz z opisami, ilustracjami oraz linkami do repozytoriów.",
        "Na stronach obu projektów dodano historię ostatnich commitów z GitHub.",
        "Dodano umiejętność AI Literacy — wykorzystanie AI do wspomagania programowania i tworzenia grafik.",
        "Uzupełniono stopkę o ikony React, Tailwind CSS i ChatGPT.",
      ],
    },
    en: {
      title: "Expanded projects and skills",
      changes: [
        "Grouped projects by status: in development, actively updated and completed.",
        "Added the Fleets and Cybersecurity projects with descriptions, illustrations and repository links.",
        "Added recent GitHub commit history to both project pages.",
        "Added AI Literacy, covering the use of AI to support programming and create graphics.",
        "Updated the footer with React, Tailwind CSS and ChatGPT icons.",
      ],
    },
  },
  {
    id: "2026-09-08-history-and-fixes",
    date: "2026-09-08",
    pl: {
      title: "Historia aktualizacji i poprawki działania strony",
      changes: [
        "Dodano historię aktualizacji z opisami zmian po polsku i angielsku.",
        "Strona działa także wtedy, gdy przeglądarka blokuje zapisywanie ustawień.",
        "Poprawiono przewijanie między podstronami, przejścia do sekcji i powrót do poprzedniej pozycji.",
        "Ułatwiono obsługę podglądu zdjęć klawiaturą i czytnikiem ekranu.",
        "Animacja tła dopasowuje się do rozmiaru okna i zatrzymuje się w ukrytej karcie.",
        "Uzupełniono polskie i angielskie tłumaczenia oraz formatowanie dat.",
        "Dodano czytelny komunikat i link powrotny dla nieistniejących stron i projektów.",
        "Poprawiono licznik wejść w tej przeglądarce, aby nie zwiększał się przy zmianie języka lub podstrony.",
      ],
    },
    en: {
      title: "Update history and site improvements",
      changes: [
        "Added an update history with descriptions in Polish and English.",
        "The site now keeps working when the browser blocks saving preferences.",
        "Improved scrolling between pages, section links and restoring your previous position.",
        "Made image previews easier to use with a keyboard and screen reader.",
        "The background animation adapts to the window size and pauses in hidden tabs.",
        "Completed Polish and English translations and localized date formatting.",
        "Added a clear message and a return link for missing pages and projects.",
        "Fixed the visit counter for this browser so changing the language or page does not increase it.",
      ],
    },
  },
];

export const updates = [...entries].sort((a, b) => b.date.localeCompare(a.date));

export function formatUpdateDate(date, lang) {
  return new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}
