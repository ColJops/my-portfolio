import { translations } from "../i18n";

export const t = (path) => {
  const keys = path.split(".");
  let value = translations[window.localStorage.getItem("lang") || "pl"];

  for (let k of keys) {
    value = value?.[k];
  }

  return value || path;
};