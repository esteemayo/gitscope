'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import AcceptableUseItem from './AcceptableUseItem';

import { AcceptableUseGroupProps } from '@/types/terms/acceptableUse/acceptable.use.group.type';
import '../../../styles/components/terms/acceptableUse/AcceptableUseGroup.scss';

const AcceptableUseGroup = ({
  id,
  eyebrow,
  title,
  description,
  items,
  accentColor,
  groupIndex,
  className,
  style,
}: AcceptableUseGroupProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: groupIndex * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('acceptable-use-group', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby={`acceptable-use-group-${id}`}
    >
      <header className='acceptable-use-group__header'>
        <div className='acceptable-use-group__heading'>
          <span className='acceptable-use-group__eyebrow'>{eyebrow}</span>

          <h3
            id={`acceptable-use-group-${id}`}
            className='acceptable-use-group__title'
          >
            {title}
          </h3>
        </div>

        <p className='acceptable-use-group__description'>{description}</p>
      </header>

      <div className='acceptable-use-group__items'>
        {items.map((item, index) => (
          <AcceptableUseItem key={item.id} {...item} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default AcceptableUseGroup;
