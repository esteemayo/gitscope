'use client';

import { Check } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { RoadmapCardProps } from '@/types/about/roadmap/roadmap.card.type';
import '../../../styles/components/about/roadmap/RoadmapCard.scss';

const RoadmapCard = ({
  icon: Icon,
  title,
  description,
  accentColor,
  status,
  items,
  variants,
  className,
  style,
}: RoadmapCardProps) => {
  return (
    <motion.article
      variants={variants}
      className={clsx('roadmap-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='roadmap-card__status'>{status.label}</div>

      <header className='roadmap-card__header'>
        <div className='roadmap-card__icon'>
          <Icon
            size={28}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>

        <div className='roadmap-card__content'>
          <h3 className='roadmap-card__content--title'>{title}</h3>

          <p className='roadmap-card__content--description'>{description}</p>
        </div>
      </header>

      <div className='roadmap-card__divider' />

      <div className='roadmap-card__progress'>
        <div
          className='roadmap-card__progress--fill'
          style={{ width: `${status.progress}%` }}
        />
      </div>

      <ul className='roadmap-card__list'>
        {items.map((item) => (
          <li key={item} className='roadmap-card__item'>
            <Check
              size={14}
              strokeWidth={1.8}
              className='roadmap-card__item--check'
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <span className='roadmap-card__item--value'>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default RoadmapCard;
