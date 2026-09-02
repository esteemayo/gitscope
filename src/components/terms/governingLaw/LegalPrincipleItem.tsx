'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { LegalPrincipleItemProps } from '@/types/terms/governingLaw/legal.principle.item.type';
import '../../../styles/components/terms/governingLaw/LegalPrincipleItem.scss';

const LegalPrincipleItem = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: LegalPrincipleItemProps) => {
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
      className={clsx('legal-principle-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='legal-principle-item__top'>
        <span className='legal-principle-item__number'>
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className='legal-principle-item__icon'>
          <Icon
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </div>

      <div className='legal-principle-item__content'>
        <h4 className='legal-principle-item__content--title'>{title}</h4>

        <p className='legal-principle-item__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default LegalPrincipleItem;
