# Poprawki po code review

Wdrożono siedem ustaleń z przeglądu z 7 września 2026:

- Storage jest opcjonalny; błędy odczytu, zapisu i dostępu nie przerywają działania. Język jest ograniczony do PL/EN, licznik do nieujemnych bezpiecznych liczb całkowitych.
- Nowa nawigacja rozpoczyna się u góry, kotwice kierują do sekcji, a Wstecz/Dalej odtwarzają pozycje zapisane dla wpisów historii w bieżącym dokumencie.
- Podgląd obrazu używa natywnego `dialog.showModal()`, nazwy dostępności, przycisku zamknięcia z początkowym fokusem i powrotu fokusu. Natywny dialog obsługuje Escape i wyłącza interakcje z tłem.
- MatrixRain przelicza kolumny przez ResizeObserver i zatrzymuje animację dla zerowych wymiarów oraz ukrytej karty.
- Uzupełniono PL/EN, teksty SiteInfo, lokalizację daty i synchronizację `html.lang`.
- Nieznane trasy i ID projektu wyświetlają komunikat z linkiem powrotnym.
- Licznik mierzy wejścia do dokumentu w tej przeglądarce. Zwiększa się raz przy załadowaniu modułu, również przy wejściu bezpośrednio na podstronę. Zmiana języka, montowania StrictMode i nawigacja SPA nie zwiększają wartości. Bez storage wartość działa wyłącznie w pamięci.

## Weryfikacja

`npm test` uruchamia testy regresji storage, licznika, tłumaczeń, przewijania i MatrixRain. Testy efektów używają atrap środowiska przeglądarkowego i nie zastępują testów UI.

Lint i build Vite przeszły lokalnie na Node 22.16.0. Build wykonano bez generatora daty, aby zachować wcześniejszą zmianę użytkownika w `src/data/buildInfo.js`. Nie wykonywano czystej instalacji zależności.

Przeglądarka nie była dostępna w narzędziu automatyzacji. Do ręcznej kontroli pozostają:

1. Otwarcie podglądu Enterem, Tab/Shift+Tab, Escape i powrót fokusu.
2. Przewinięta lista → szczegóły → Wstecz/Dalej oraz Kontakt, także przy wolnym ładowaniu obrazów.
3. Home: szerokość 1000 → 1440 → 1000 px i widoczność obu paneli MatrixRain.
4. Przełączanie PL/EN przy zablokowanym storage, poprawne `html.lang` i niezmienny licznik.
5. Bezpośrednie wejścia i odświeżenia podstron na docelowym hostingu; konfiguracja HTTP i wdrożenie nie były częścią lokalnych zmian.
