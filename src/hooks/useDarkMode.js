import { useEffect, useState } from 'react';

export const useDarkMode = () => {
     const [isDarkMode, setIsDarkMode] = useState("dark");

     const toggleDarkMode = () => {
          setIsDarkMode(!isDarkMode);
     };

     useEffect(() => {
          const html = window.document.documentElement;

          const nextTheme = isDarkMode ? "dark" : "light";
          html.classList.add(nextTheme);

          const prevTheme = isDarkMode ? "light" : "dark";
          html.classList.remove(prevTheme);

          localStorage.setItem("theme", nextTheme);

     }, [isDarkMode]);

     // console.log(localStorage.theme);

     return [isDarkMode, toggleDarkMode]
};