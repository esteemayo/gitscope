'use client';

import { motion } from 'framer-motion';
import { Lock, Sparkles, TrendingUp, Zap } from 'lucide-react';

import { PipelineSummaryProps } from '@/types/about/architecture/pipeline.summary.type';
import '../../../styles/components/about/architecture/PipelineSummary.scss';

const PipelineSummary = ({
  title = 'Actionable Developer Insights',
  description = 'GitScope transforms raw GitHub data into meaningful analytics, helping developers understand repository health, activity trands and overall project performance.',
}: PipelineSummaryProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className='pipeline-summary'
    >
      <div className='pipeline-summary__icon'>
        <Sparkles
          size={30}
          strokeWidth={1.8}
          role='img'
          aria-hidden='true'
          focusable='false'
        />
      </div>

      <div className='pipeline-summary__content'>
        <h3 className='pipeline-summary__content--title'>{title}</h3>

        <p className='pipeline-summary__content--description'>{description}</p>
      </div>

      <div className='pipeline-summary__pillars'>
        <div className='pipeline-summary__group'>
          <Zap
            size={16}
            strokeWidth={1.8}
            className='pipeline-summary__group--icon'
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          <span className='pipeline-summary__group--label'>Fast</span>
        </div>

        <div className='pipeline-summary__group'>
          <Lock
            size={16}
            strokeWidth={1.8}
            className='pipeline-summary__group--icon'
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          <span className='pipeline-summary__group--label'>Reliable</span>
        </div>

        <div className='pipeline-summary__group'>
          <TrendingUp
            size={16}
            strokeWidth={1.8}
            className='pipeline-summary__group--icon'
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          <span className='pipeline-summary__group--label'>Scalable</span>
        </div>
      </div>
    </motion.article>
  );
};

export default PipelineSummary;
