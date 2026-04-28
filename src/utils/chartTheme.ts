import { ThemeType } from '@/types/index';

export const getChartTheme = (theme: ThemeType) => {
  const isDark = theme === 'dark';

  return {
    axis: isDark ? '#94a3b8' : '#475569',
    fill: isDark ? '#38bdf8' : '#1f6fea',
    grid: isDark ? '#1e293b' : '#e2e8f0',
    tooltipBg: isDark ? '#0d1017' : '#ffffff',
    tooltipText: isDark ? '#e2e8f0' : '#0d1017',
  };
};
