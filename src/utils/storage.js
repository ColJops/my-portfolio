export function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, String(value));
  } catch {
    // Persistence is optional; application state remains usable in memory.
  }
}

export function supportedLanguage(value) {
  return value === "en" ? "en" : "pl";
}