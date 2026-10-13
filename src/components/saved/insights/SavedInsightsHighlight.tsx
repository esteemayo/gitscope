'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

import { SavedInsightProfile } from '@/types/saved/insights';
import { SavedInsightsHighlightProps } from '@/types/saved/insights/saved.insights.highlight.type';

import '../../../styles/components/saved/insights/SavedInsightsHighlight.scss';

const getDisplayName = (profile: SavedInsightProfile): string => {
  return profile.name?.trim() || profile.login;
};

const SavedInsightsHighlight = ({
  label,
  description,
  icon: Icon,
  profile,
  metric,
  accentColor,
  className,
  style,
}: SavedInsightsHighlightProps) => {
  return (
    <article
      className={clsx('saved-insights-highlight', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
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

        <Link
          href={`/${encodeURIComponent(profile.login)}`}
          className='saved-insights-highlight__content--link'
          aria-label={`View ${profile.login}'s profile`}
        >
          <span>{getDisplayName(profile)}</span>

          <ArrowUpRight size={14} />
        </Link>

        <span className='saved-insights-highlight__content--username'>
          @{profile.login}
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
