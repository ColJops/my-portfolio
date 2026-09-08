import { nextVisitCount, readStorage, writeStorage } from "./storage.js";

// One visit per document load, independent of React mounts and language changes.
export const visits = nextVisitCount(readStorage("visitCount"));
writeStorage("visitCount", visits);
