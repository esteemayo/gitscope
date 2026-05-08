'use client';

import { useEffect, useState } from 'react';

export const usePortal = (id: string) => {
  const [portalId, setPortalId] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setPortalId(document.getElementById(id));
    });

    return () => cancelAnimationFrame(frame);
  }, [id]);

  return {
    portalId,
  };
};
