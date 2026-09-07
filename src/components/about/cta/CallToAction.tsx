'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import CTAFooter from './CTAFooter';
import SectionIntro from '@/components/ui/SectionIntro';

import { containerVariants } from '@/animations/page';
import { CallToActionProps } from '@/types/about/cta/call.to.action.type';

import '../../../styles/components/about/CallToAction.scss';

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

        <motion.div
          variants={containerVariants}
          className='call-to-action__metrics'
        >
          {metrics.map((metric) => {
            const { id, icon: Icon, label } = metric;

            return (
              <div key={id} className='call-to-action__metric'>
                <Icon
                  size={16}
                  strokeWidth={1.8}
                  className='call-to-action__metric--icon'
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span className='call-to-action__metric--label'>{label}</span>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
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

        <motion.div
          variants={containerVariants}
          className='call-to-action__highlights'
        >
          {highlights.map((highlight) => {
            const { id, icon: Icon, label } = highlight;

            return (
              <div key={id} className='call-to-action__highlight'>
                <Icon
                  size={16}
                  strokeWidth={1.8}
                  className='call-to-action__highlight--icon'
                  role='img'
                  aria-hidden='true'
                  focusable='false'
                />

                <span className='call-to-action__highlight--item'>{label}</span>
              </div>
            );
          })}
        </motion.div>

        <CTAFooter />
      </div>
    </motion.section>
  );
};

export default CallToAction;
