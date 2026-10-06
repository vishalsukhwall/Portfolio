import { useEffect, useCallback } from 'react';
import { useThemeStore } from '@stores/themeStore';
import type { Theme } from '@/types';

export function useTheme() {
  const { theme, toggleTheme, setTheme } = useThemeStore();

  // Synchronize the 'dark' class on <html> and update colorScheme
  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }

    root.style.colorScheme = theme;
  }, [theme]);

  // Listen for OS system theme changes if user hasn't explicitly set a preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      const storedPreference = localStorage.getItem('portfolio-theme');
      if (!storedPreference) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [setTheme]);

  const handleToggle = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  const handleSetTheme = useCallback(
    (newTheme: Theme) => {
      setTheme(newTheme);
    },
    [setTheme]
  );

  return {
    theme,
    toggleTheme: handleToggle,
    setTheme: handleSetTheme,
    isDark: theme === 'dark',
  };
}

export default useTheme;
