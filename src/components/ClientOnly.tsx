'use client';

import { useEffect, useState } from 'react';

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setHasMounted(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  if (!hasMounted) return null;

  return <div>{children}</div>;
};

export default ClientOnly;
