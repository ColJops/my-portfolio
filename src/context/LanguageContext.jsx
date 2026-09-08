import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { readStorage, writeStorage, supportedLanguage } from "../utils/storage";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, updateLang] = useState(() => supportedLanguage(readStorage("lang")));
  const setLang = useCallback((value) => updateLang(supportedLanguage(value)), []);

  useEffect(() => {
    writeStorage("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
    }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLang musi być używane wewnątrz LanguageProvider");
  }

  return context;
}
