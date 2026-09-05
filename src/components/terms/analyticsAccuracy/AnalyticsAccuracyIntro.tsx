'use client';

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

import '../../../styles/components/terms/analyticsAccuracy/AnalyticsAccuracyIntro.scss';

const AnalyticsAccuracyIntro = ({ intro }: { intro: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='analytics-accuracy-intro'
    >
      <div className='analytics-accuracy-intro__label'>
        <Activity
          size={16}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />

        <span>Accuracy statement</span>
      </div>

      <p className='analytics-accuracy-intro__description'>{intro}</p>
    </motion.div>
  );
};

export default AnalyticsAccuracyIntro;
