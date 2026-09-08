'use client';

import { Check } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { AudienceCardProps } from '@/types/about/whoItsFor/audience.card.type';
import '../../../styles/components/about/whoItsFor/AudienceCard.scss';

const AudienceCard = ({
  icon: Icon,
  title,
  description,
  benefits,
  useCase,
  accentColor,
  previewIcon: PreviewIcon,
  previewLabel,
  index,
  className,
  style,
}: AudienceCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('audience-card', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='audience-card__preview'>
        <PreviewIcon
          size={14}
          strokeWidth={1.8}
          className='audience-card__preview--icon'
          role='img'
          aria-hidden='true'
          focusable='false'
        />

        <span className='audience-card__preview--label'>{previewLabel}</span>
      </div>

      <div className='audience-card__icon'>
        <Icon
          size={28}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='audience-card__content'>
        <h3 className='audience-card__content--title'>{title}</h3>

        <p className='audience-card__content--description'>{description}</p>
      </div>

      <div className='audience-card__divider' />

      <ul className='audience-card__list'>
        {benefits.map((benefit) => (
          <li key={benefit} className='audience-card__item'>
            <Check
              size={16}
              strokeWidth={1.8}
              className='audience-card__item--check'
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <span className='audience-card__item--label'>{benefit}</span>
          </li>
        ))}
      </ul>

      <footer className='audience-card__footer'>
        <span className='audience-card__footer--badge'>Best for</span>

        <strong className='audience-card__footer--value'>{useCase}</strong>
      </footer>
    </motion.article>
  );
};

export default AudienceCard;
