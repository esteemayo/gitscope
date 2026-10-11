'use client';

import Link from 'next/link';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';

import { SavedInsightProfile } from './SavedInsightsProfile';
import '../../../styles/components/saved/insights/SavedInsightsHighlight.scss';

type InsightProfile = SavedInsightProfile;

interface SavedInsightsHighlightProps {
  label: string;
  description: string;
  icon: LucideIcon | React.ComponentType;
  profile: InsightProfile;
  metric: string;
}

const SavedInsightsHighlight = ({
  label,
  description,
  icon: Icon,
  profile,
  metric,
}: SavedInsightsHighlightProps) => {
  return (
    <article className='saved-insights-highlight'>
      <div className='saved-insights-highlight__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='saved-insights-highlight__content'>
        <span className='saved-insights-highlight__content--label'>
          {label}
        </span>

        <Link href={``} className='saved-insights-highlight__content--link'>
          <span></span>

          <ArrowUpRight size={14} />
        </Link>

        <span className='saved-insights-highlight__content--username'>
          @{profile.username}
        </span>

        <p className='saved-insights-highlight__content--description'>
          {description}
        </p>
      </div>

      <span className='saved-insights-highlight__metric'>{metric}</span>
    </article>
  );
};

export default SavedInsightsHighlight;
