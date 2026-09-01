'use client';

import { Check } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { SurvivingObligationItemProps } from '@/types/terms/termination/surviving.obligation.item.type';
import '../../../styles/components/terms/termination/SurvivingObligationItem.scss';

const SurvivingObligationItem = ({
  title,
  description,
  accentColor,
  index,
  className,
  style,
}: SurvivingObligationItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('surviving-obligation-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='surviving-obligation-item__check'>
        <Check
          size={14}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='surviving-obligation-item__content'>
        <h4 className='surviving-obligation-item__content--title'>{title}</h4>

        <p className='surviving-obligation-item__content--description'>
          {description}
        </p>
      </div>
    </motion.li>
  );
};

export default SurvivingObligationItem;
