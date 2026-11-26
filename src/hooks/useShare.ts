'use client';

import { useCopyUrl } from './useCopyUrl';

interface IUseShare {
  (
    title: string,
    text: string,
    url: string,
  ): {
    handleShare(): void;
  };
}

export const useShare: IUseShare = (title, text, url) => {
  const { handleCopy } = useCopyUrl(url);

  const handleShare = async () => {
    if (!navigator.share) {
      await handleCopy();
      return;
    }

    try {
      await navigator.share({
        title,
        text,
        url,
      });
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        await handleCopy();
      }
    }
  };

  return {
    handleShare,
  };
};
