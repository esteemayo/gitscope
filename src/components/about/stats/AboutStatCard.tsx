'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

import { AboutStatCardProps } from '@/types/about/stats/about.stat.card.type';
import '../../../styles/components/about/stats/AboutStatCard.scss';

const AboutStatCard = ({
  icon: Icon,
  value,
  label,
  trend,
  trendLabel,
  accentColor,
  index,
  className,
  style,
}: AboutStatCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('about-stat-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='about-stat-card__glow' />

      <div className='about-stat-card__icon'>
        <Icon
          size={30}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='about-stat-card__content'>
        <div className='about-stat-card__content--metric'>{value}</div>

        <h3 className='about-stat-card__content--label'>{label}</h3>
      </div>

      <footer className='about-stat-card__footer'>
        <span className='about-stat-card__footer--trend'>
          <ArrowUpRight
            size={14}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
          {trend}
        </span>

        <small className='about-stat-card__footer--trend-label'>
          {trendLabel}
        </small>
      </footer>
    </motion.article>
  );
};

export default AboutStatCard;
