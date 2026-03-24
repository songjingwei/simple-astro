import { createContext, useContext, useState, useCallback } from "react"
import zh from "./zh.json"
import en from "./en.json"

const translations = { zh, en }
const STORAGE_KEY = "gamesir-lang"

function getInitialLocale() {
  if (typeof window === "undefined") return "zh"
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "zh" || saved === "en") return saved
  } catch {}
  return "zh"
}

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale)

  const setLocale = useCallback((lang) => {
    setLocaleState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {}
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en"
  }, [])

  const t = translations[locale]

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
