export const RECENT_KEY = 'gitScope:recentUsers';

export const HINT_KEY = 'gitScope:seen_hint';

export const THEME_KEY = 'gitScope:theme';

export const STORAGE_KEY = 'gitScope:saved';

export const truncText = (str: string, count: number) => {
  if (typeof str === 'string' && str.length > count) {
    str = str.split('').slice(0, count).join('').concat(' ...');
  }

  return str;
};

export const getFromStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key)!);
  }
};

export const setToStorage = <T extends string, U>(key: T, value: U) => {
  if (typeof window !== 'undefined') {
    return localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeFromStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.removeItem(key);
  }
};
