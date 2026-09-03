'use client';

import { MapPin } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { JurisdictionPanelProps } from '@/types/terms/governingLaw/jurisdiction.panel.type';
import '../../../styles/components/terms/governingLaw/JurisdictionPanel.scss';

const JurisdictionPanel = ({
  label,
  jurisdiction,
  title,
  description,
  notice,
  icon: Icon,
  accentColor,
  className,
  style,
}: JurisdictionPanelProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={clsx('jurisdiction-panel', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='jurisdiction-title'
    >
      <div className='jurisdiction-panel__visual'>
        <div className='jurisdiction-panel__rings' />

        <div className='jurisdiction-panel__icon'>
          <Icon
            size={28}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </div>
      </div>

      <div className='jurisdiction-panel__content'>
        <span className='jurisdiction-panel__label'>{label}</span>

        <div className='jurisdiction-panel__location'>
          <MapPin
            size={14}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          <span className='jurisdiction-panel__location--text'>
            {jurisdiction}
          </span>
        </div>

        <div className='jurisdiction-panel__body'>
          <h3
            id='jurisdiction-title'
            className='jurisdiction-panel__body--title'
          >
            {title}
          </h3>

          <p className='jurisdiction-panel__body--description'>{description}</p>
        </div>

        <div className='jurisdiction-panel__notice'>{notice}</div>
      </div>
    </motion.section>
  );
};

export default JurisdictionPanel;
