// src/i18n.ts

import { initReactI18next } from 'react-i18next';

// Import your translations
import enTranslation from "@assets/tran/en.json";
import itTranslation from '@assets/tran/it.json';
import i18next from 'i18next';

const resources = {
  en: { translation: enTranslation },
  it: { translation: itTranslation },
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources,
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18next;
