'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { CircleOff } from 'lucide-react';

import { LiabilityExclusionItemProps } from '@/types/terms/limitationOfLiability/liability.exclusion.item.type';
import '../../../styles/components/terms/limitationOfLiability/LiabilityExclusionItem.scss';

const LiabilityExclusionItem = ({
  label,
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: LiabilityExclusionItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('liability-exclusion-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='liability-exclusion-item__rail'>
        <span className='liability-exclusion-item__rail--label'>{label}</span>

        <i
          className='liability-exclusion-item__rail--underline'
          aria-hidden='true'
        />
      </div>

      <div className='liability-exclusion-item__icon'>
        <Icon
          size={20}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='liability-exclusion-item__content'>
        <h4 className='liability-exclusion-item__content--title'>{title}</h4>

        <p className='liability-exclusion-item__content--description'>
          {description}
        </p>
      </div>

      <div className='liability-exclusion-item__end' aria-hidden='true'>
        <CircleOff
          size={16}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>
    </motion.article>
  );
};

export default LiabilityExclusionItem;
