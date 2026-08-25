'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { IntellectualPropertyRuleProps } from '@/types/terms/intellectualProperty/intellectual.property.rule.type';
import '../../../styles/components/terms/intellectualProperty/IntellectualPropertyRule.scss';

const IntellectualPropertyRule = ({
  title,
  description,
  icon: Icon,
  accentColor,
  index,
  className,
  style,
}: IntellectualPropertyRuleProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.045,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('intellectual-property-rule', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='intellectual-property-rule__icon'>
        <Icon
          size={18}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='intellectual-property-rule__content'>
        <h4 className='intellectual-property-rule__content--title'>{title}</h4>

        <p className='intellectual-property-rule__content--description'>
          {description}
        </p>
      </div>

      <span className='intellectual-property-rule__index' aria-hidden='true'>
        {String(index + 1).padStart(2, '0')}
      </span>
    </motion.article>
  );
};

export default IntellectualPropertyRule;
