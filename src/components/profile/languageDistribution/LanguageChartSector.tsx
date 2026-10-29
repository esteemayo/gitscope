'use client';

import { Sector } from 'recharts';
import { LanguageChartSectorProps } from '@/types/profile/language/language.chart.sector.type';

const LanguageChartSector = ({
  languages,
  ...props
}: LanguageChartSectorProps) => {
  const language = languages[props.index];

  return <Sector {...props} fill={language.color ?? '#94A3B8'} stroke='none' />;
};

export default LanguageChartSector;
