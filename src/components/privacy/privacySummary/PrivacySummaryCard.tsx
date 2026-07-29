'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';

import { PrivacySummaryCardProps } from '@/types/privacy/privacySummary/privacy.summary.card.type';
import '../../../styles/components/privacy/privacySummary/PrivacySummaryCard.scss';

const PrivacySummaryCard = ({
  item: { icon: Icon, title, description, accentColor, href },
  className,
  style,
}: PrivacySummaryCardProps) => {
  const Component = href ? motion.a : motion.article;

  return (
    <Component
      {...(href ? { href } : {})}
      className={clsx('privacy-summary-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='privacy-summary-card__icon' aria-hidden='true'>
        <Icon size={24} aria-hidden='true' focusable='false' />
      </div>

      <div className='privacy-summary-card__content'>
        <h3 className='privacy-summary-card__content--title'>{title}</h3>

        <p className='privacy-summary-card__content--description'>
          {description}
        </p>
      </div>

      {href && (
        <div className='privacy-summary-card__action' aria-hidden='true'>
          <ArrowRight size={18} aria-hidden='true' focusable='false' />
        </div>
      )}
    </Component>
  );
};

export default PrivacySummaryCard;
