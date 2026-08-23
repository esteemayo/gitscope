'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Activity } from 'lucide-react';

import AnalyticsLimitations from './AnalyticsLimitations';
import AnalyticsProcess from './AnalyticsProcess';
import AnalyticsMethodology from './AnalyticsMethodology';
import TermsSectionHeader from '../TermsSectionHeader';
import AnalyticsAccuracyNotice from './AnalyticsAccuracyNotice';

import { containerVariants } from '@/animations/page';
import { TermsAnalyticsAccuracyProps } from '@/types/terms/analyticsAccuracy/terms.analytics.accuracy.type';

import '../../../styles/components/terms/analyticsAccuracy/TermsAnalyticsAccuracy.scss';

const TermsAnalyticsAccuracy = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  methodology,
  flow,
  limitations,
  notice,
  accentColor,
  className,
  style,
}: TermsAnalyticsAccuracyProps) => {
  return (
    <motion.section
      id='analytics-accuracy'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('terms-analytics-accuracy', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='terms-analytics-accuracy-title'
    >
      <div className='terms-analytics-accuracy__container'>
        <TermsSectionHeader
          id='terms-analytics-accuracy-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='terms-analytics-accuracy__body'>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className='terms-analytics-accuracy__intro'
          >
            <div className='terms-analytics-accuracy__intro--label'>
              <Activity
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span>Accuracy statement</span>
            </div>

            <p className='terms-analytics-accuracy__intro--description'>
              {intro}
            </p>
          </motion.div>

          <AnalyticsMethodology methodology={methodology} />

          <AnalyticsProcess flow={flow} />

          <AnalyticsLimitations items={limitations} />

          <AnalyticsAccuracyNotice {...notice} />
        </div>
      </div>
    </motion.section>
  );
};

export default TermsAnalyticsAccuracy;
