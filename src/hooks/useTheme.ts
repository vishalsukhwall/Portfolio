import { useEffect } from 'react';
import { useThemeStore } from '@stores/themeStore';

export function useTheme() {
  const { theme, toggleTheme, setTheme } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Purani theme classes reset karke current theme apply karein
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // localStorage me theme sync rakhein
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Ignore if localStorage is unavailable
    }
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Agar user ne manually koi theme select nahi ki ho tabhi system preference follow karein
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [setTheme]);

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
}