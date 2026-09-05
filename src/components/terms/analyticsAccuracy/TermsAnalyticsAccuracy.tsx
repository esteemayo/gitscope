'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import AnalyticsLimitations from './AnalyticsLimitations';
import AnalyticsProcess from './AnalyticsProcess';
import AnalyticsAccuracyIntro from './AnalyticsAccuracyIntro';
import TermsSectionHeader from '../TermsSectionHeader';
import AnalyticsAccuracyNotice from './AnalyticsAccuracyNotice';
import AnalyticsMethodology from './AnalyticsMethodology';

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
          <AnalyticsAccuracyIntro intro={intro} />

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
