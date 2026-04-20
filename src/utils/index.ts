export const recentKey = 'recentUsers';

export const hintKey = 'seen_hint';

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
