# My Portfolio

Portfolio zbudowane w React i Vite.

## Historia aktualizacji

Wpisy podstrony `/aktualizacje` znajdują się w `src/data/updates.js`. Aby opisać kolejną aktualizację, dodaj do tablicy `entries` obiekt z unikalnym `id`, datą publikacji `date` w formacie `YYYY-MM-DD` oraz polami `pl` i `en`. Każda wersja językowa zawiera `title` (tytuł) i `changes` (listę krótkich opisów zmian dla odwiedzających).

Wpisy są automatycznie sortowane od najnowszego. Data ostatniej aktualizacji na stronie głównej pochodzi z najnowszego wpisu, więc nie trzeba zmieniać daty kompilacji ani pliku `src/data/buildInfo.js`.
