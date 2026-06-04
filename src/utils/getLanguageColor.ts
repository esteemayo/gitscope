import { LANGUAGE_COLORS } from '@/constants/languageColor';

export const getLanguageColor = (language?: string | null) => {
  if (!language) {
    return '#6b7280';
  }

  return LANGUAGE_COLORS[language] ?? '#6b7280';
};
