import { useCallback, useEffect, useState } from "react";

export const useChangeTheme = () => {
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') ?? 'light');
  
    useEffect(() => {  
      if (currentTheme === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
  
      localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);
  
    const changeTheme = useCallback((newTheme:any) => {
      setCurrentTheme(newTheme);
    }, []);
  
    return { currentTheme, changeTheme };
  };
  