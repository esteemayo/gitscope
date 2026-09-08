'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import CTAHighlight from './CTAHighlight';
import CTAFooter from './CTAFooter';
import SectionIntro from '@/components/ui/SectionIntro';
import CTAMetric from './CTAMetric';

import { containerVariants } from '@/animations/page';
import { CallToActionProps } from '@/types/about/cta/call.to.action.type';

import '../../../styles/components/about/cta/CallToAction.scss';

const CallToAction = ({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  highlights,
  metrics,
  accentColor,
  className,
  style,
}: CallToActionProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('call-to-action', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='call-to-action-title'
    >
      <div className='call-to-action__container'>
        <SectionIntro
          id='call-to-action-title'
          badge={badge}
          title={title}
          description={description}
          accentColor={accentColor}
          variants={containerVariants}
        />

        <div className='call-to-action__metrics'>
          {metrics.map((metric, index) => (
            <CTAMetric key={metric.id} {...metric} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className='call-to-action__actions'
        >
          <Link
            href={primaryAction.href}
            className='call-to-action__actions--primary'
          >
            <span>{primaryAction.label}</span>

            <ArrowRight size={18} />
          </Link>

          <a
            href={secondaryAction.href}
            className='call-to-action__actions--secondary'
            target='_blank'
            rel='noopener noreferrer'
          >
            {secondaryAction.label}
          </a>
        </motion.div>

        <div className='call-to-action__highlights'>
          {highlights.map((highlight, index) => (
            <CTAHighlight key={highlight.id} {...highlight} index={index} />
          ))}
        </div>

        <CTAFooter />
      </div>
    </motion.section>
  );
};

export default CallToAction;
