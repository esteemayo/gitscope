export const useThemeQuery = () => {
  const setThemeQuery = (theme: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('theme', theme);
    window.history.replaceState({}, '', url);
  };

  return {
    setThemeQuery,
  };
};
