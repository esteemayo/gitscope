'use client';

import { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonProvider = ({ children }: { children: React.ReactNode }) => {
  return <SkeletonTheme direction='rtl'>{children}</SkeletonTheme>;
};

export default SkeletonProvider;
