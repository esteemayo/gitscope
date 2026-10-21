import { FALLBACK_COLOR, LANGUAGE_COLORS } from '@/constants/languageColor';

export const getLanguageColor = (language?: string | null) => {
  if (!language) {
    return FALLBACK_COLOR;
  }

  return LANGUAGE_COLORS[language] ?? FALLBACK_COLOR;
};
