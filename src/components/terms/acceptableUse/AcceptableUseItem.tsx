'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { AcceptableUseItemProps } from '@/types/terms/acceptableUse/acceptable.use.item.type';
import '../../../styles/components/terms/acceptableUse/AcceptableUseItem.scss';

const AcceptableUseItem = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: AcceptableUseItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('acceptable-use-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='acceptable-use-item__header'>
        <span className='acceptable-use-item__header--number'>
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className='acceptable-use-item__header--icon'>
          <Icon
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </header>

      <div className='acceptable-use-item__content'>
        <h3 className='acceptable-use-item__content--title'>{title}</h3>

        <p className='acceptable-use-item__content--description'>
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default AcceptableUseItem;
