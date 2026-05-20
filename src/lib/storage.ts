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

export const saveAllUsers = (users: SavedUserType[]) => {
  setToStorage(STORAGE_KEY, users);
  emitChange();
};

export const saveUser = (user: SavedUserType) => {
  const existing = getSavedUsers();

  const exists = existing.some(item => item.username === user.username);

  if (exists) return;

  saveAllUsers([
    { ...user, pinned: false },
    ...existing,
  ]);
};

export const removeUser = (username: string) => {
  const updated = getSavedUsers().filter((user) => user.username !== username);

  saveAllUsers(updated);
};

export const togglePin = (username: string) => {
  const updated = getSavedUsers().map((user) =>
    user.username === username
      ? { ...user, pinned: !user.pinned }
      : user
  );

  const sorted = [
    ...updated.filter((user) => user.pinned),
    ...updated.filter((user) => !user.pinned),
  ];

  saveAllUsers(sorted);
};
