import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      main: 'Main',
      chooseLanguage: 'Choose language: ',
      currentLanguage: {
        en: 'English',
        ru: 'Russian',
      },
      themeMode: {
        light: 'Light mode',
        dark: 'Dark mode',
      },
      sidebarItems: {
        store: 'store',
        weather: 'weather',
      },
    },
  },
  ru: {
    translation: {
      main: 'На главную',
      chooseLanguage: 'Выберите язык: ',
      currentLanguage: {
        en: 'Английский',
        ru: 'Русский',
      },
      themeMode: {
        light: 'Светлая тема',
        dark: 'Темная тема',
      },
      sidebarItems: {
        store: 'Магазин',
        weather: 'Погода',
      },
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
