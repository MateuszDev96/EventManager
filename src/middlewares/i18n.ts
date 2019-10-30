import i18nNext from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import pl from '@/i18n/pl'

export const i18n = i18nNext
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    resources: {
      pl: {
        translation: pl
      }
    }
  })