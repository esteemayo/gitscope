import { SavedUserType } from '@/types';
import { getFromStorage, setToStorage, STORAGE_KEY } from '@/utils';

const emitChange = () => {
  window.dispatchEvent(new Event('saved:updated'));
};

export const getSavedUsers = (): SavedUserType[] => {
  if (typeof window === 'undefined') return [];

  const data = Array.from(getFromStorage(STORAGE_KEY)) as SavedUserType[];
  return data ?? [];
};

export const isUserSaved = (username: string) => {
  return getSavedUsers().some((user) => user.username === username);
};

export const saveUser = (user: SavedUserType) => {
  const existing = getSavedUsers();

  const exists = existing.some(item => item.username === user.username);

  if (exists) return;

  setToStorage(STORAGE_KEY, [user, ...existing]);
  emitChange();
};

export const removeUser = (username: string) => {
  const updated = getSavedUsers().filter((user) => user.username !== username);

  setToStorage(STORAGE_KEY, updated);
  emitChange();
};
