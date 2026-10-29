'use client';

import { Sector } from 'recharts';
import { LanguageSectorProps } from '@/types/dashboard/analytics/language.sector.type';

const LanguageSector = ({ languages, ...props }: LanguageSectorProps) => {
  const language = languages[props.index];

  return <Sector {...props} fill={language.color ?? '#94A3B8'} stroke='none' />;
};

export default LanguageSector;
