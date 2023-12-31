import { useCallback, useEffect, useState } from "react";
import translationEN from '../translate/en.json';
import translationAR from '../translate/ar.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next'; // Make sure this import is correct
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN
    },
    ar: {
      translation: translationAR
    }
  },
  lng: 'en', 
  interpolation: {
    escapeValue: false
  }
});
export const useChangeLanguage= () => {
    const [currentlanguage, setCurrentlanguage] = useState(localStorage.getItem('language') ?? 'en');
  
    useEffect(() => {
  
      if (currentlanguage=== 'ar') {
        i18n.changeLanguage('ar'); 
        document.body.setAttribute('dir', 'rtl'); document.body.classList.add('ar');
      } else {
        i18n.changeLanguage('en'); 
        document.body.setAttribute('dir', 'ltr'); document.body.classList.add('en')
      }
  
      localStorage.setItem('language', currentlanguage);
    }, [currentlanguage]);
  
    const changelanguage= useCallback((newlanguage:any) => {
      setCurrentlanguage(newlanguage);
    }, []);
  
    return { currentlanguage, changelanguage};
  };
  