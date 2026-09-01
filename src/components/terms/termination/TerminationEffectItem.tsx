'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { TerminationEffectItemProps } from '@/types/terms/termination/termination.effect.item.type';
import '../../../styles/components/terms/termination/TerminationEffectItem.scss';

const TerminationEffectItem = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: TerminationEffectItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('termination-effect-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='termination-effect-item__step'>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className='termination-effect-item__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='termination-effect-item__content'>
        <h4 className='termination-effect-item__content--title'>{title}</h4>

        <p className='termination-effect-item__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default TerminationEffectItem;
