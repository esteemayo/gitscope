'use client';

import { useEffect, useState } from 'react';

export const useCopyUrl = (url: string) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isCopyError, setIsCopyError] = useState(false);

  const handleCopy = async () => {
    setIsCopyError(false);

    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
    } catch {
      setIsCopyError(true);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsCopied(false), 1200);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return {
    isCopied,
    isCopyError,
    handleCopy,
  };
};
