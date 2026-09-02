'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { ChangeReasonItemProps } from '@/types/terms/changesToTerms/changes.reason.item.type';
import '../../../styles/components/terms/changesToTerms/ChangeReasonItem.scss';

const ChangeReasonItem = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: ChangeReasonItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('change-reason-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='change-reason-item__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='change-reason-item__content'>
        <h4 className='change-reason-item__content--title'>{title}</h4>

        <p className='change-reason-item__content--description'>
          {description}
        </p>
      </div>

      <span className='change-reason-item__index'>
        {String(index + 1).padStart(2, '0')}
      </span>
    </motion.article>
  );
};

export default ChangeReasonItem;
