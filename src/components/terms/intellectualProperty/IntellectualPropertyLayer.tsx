'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { IntellectualPropertyLayerProps } from '@/types/terms/intellectualProperty/intellectual.property.layer.type';
import '../../../styles/components/terms/intellectualProperty/IntellectualPropertyLayer.scss';

const IntellectualPropertyLayer = ({
  label,
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: IntellectualPropertyLayerProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('intellectual-property-layer', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <header className='intellectual-property-layer__header'>
        <span className='intellectual-property-layer__header--label'>
          {label}
        </span>

        <div className='intellectual-property-layer__header--icon'>
          <Icon
            size={18}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </header>

      <div className='intellectual-property-layer__content'>
        <h3 className='intellectual-property-layer__content--title'>{title}</h3>

        <p className='intellectual-property-layer__content--description'>
          {description}
        </p>
      </div>

      <div className='intellectual-property-layer__line' aria-hidden='true' />
    </motion.article>
  );
};

export default IntellectualPropertyLayer;
