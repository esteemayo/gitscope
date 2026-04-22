'use client';

import { useEffect, useState } from 'react';

interface IUseNetworkStatus {
  (): { isOnline: boolean; }
}

export const useNetworkStatus: IUseNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const update = () => {
      setIsOnline(navigator.onLine);
    };

    update();

    window.addEventListener('online', update);
    window.addEventListener('offline', update);

    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    }
  }, []);

  return {
    isOnline,
  };
};
