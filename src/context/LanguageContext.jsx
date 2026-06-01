import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") {
      return "pl";
    }

    return localStorage.getItem("lang") || "pl";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
    }),
    [lang]
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