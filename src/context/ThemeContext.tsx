'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { useThemeQuery } from '@/hooks/useThemeQuery';
import { ThemeType } from '@/types';
import { getFromStorage, setToStorage, themeKey } from '@/utils';

type ThemeContextType = {
  theme: ThemeType;
  resolvedTheme: 'light' | 'dark';
  setTheme(theme: ThemeType): void;
  toggleTheme(): void;
};

const INITIAL_STATE: ThemeContextType = {
  theme: 'auto',
  resolvedTheme: 'light',
  setTheme: (() => { }) as (theme: ThemeType) => void,
  toggleTheme: () => { },
};

const ThemeContext = createContext(INITIAL_STATE);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { setThemeQuery } = useThemeQuery();

  const [theme, setTheme] = useState<ThemeType>('dark');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  const getSystem = () => {
    return window.matchMedia('(prefers-color-scheme: dark)')
      .matches ? 'dark' : 'light';
  };

  const toggleTheme = () => {
    const next: ThemeType = theme === 'dark' ? 'light' : 'dark';

    setTheme(next);
    setToStorage(themeKey, next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const handleSetTheme = (theme: ThemeType) => {
    setTheme(theme);
    setThemeQuery(theme);
    setToStorage(themeKey, theme);

    const applied = theme === 'auto' ? getSystem() : theme;

    setResolvedTheme(applied);
    document.documentElement.setAttribute('data-theme', applied);
  };

  useEffect(() => {
    const savedTheme = getFromStorage(themeKey) as ThemeType;

    const urlParams = new URLSearchParams(window.location.search);
    const urlTheme = urlParams.get('theme') as ThemeType;

    let frame;

    const initial = urlTheme || savedTheme || 'auto';

    frame = requestAnimationFrame(() => {
      setTheme(initial);
    });

    const applied = initial === 'auto' ? getSystem() : initial;

    frame = requestAnimationFrame(() => {
      setResolvedTheme(applied);
    });

    document.documentElement.setAttribute('data-theme', applied);

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (theme !== 'auto') return;

    const media = window.matchMedia('(prefers-color-scheme: dark');

    const handler = () => {
      const system = getSystem();

      setResolvedTheme(system);
      document.documentElement.setAttribute('data-theme', system);
    };

    media.addEventListener('change', handler);

    return () => media.removeEventListener('change', handler);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      resolvedTheme,
      setTheme: handleSetTheme,
      toggleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
