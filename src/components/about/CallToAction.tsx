import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

import AboutSectionHeader from './AboutSectionHeader';
import { CallToActionProps } from '@/types/about/call.to.action.type';

import '../../styles/components/about/CallToAction.scss';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const CallToAction = ({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  highlights,
  metrics,
}: CallToActionProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25, margin: '-50px' }}
      className='call-to-action'
      aria-labelledby='call-to-action-title'
    >
      <div className='call-to-action__container'>
        <motion.div variants={containerVariants}>
          <AboutSectionHeader
            id='call-to-action-title'
            badge={badge}
            title={title}
            description={description}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className='call-to-action__metrics'
        >
          {metrics.map((metric) => {
            const { id, icon: Icon, label } = metric;

            return (
              <div key={id} className='call-to-action__metric'>
                <Icon size={16} className='call-to-action__metric--icon' />

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
                <Icon size={16} className='call-to-action__highlight--icon' />

                <span className='call-to-action__highlight--item'>{label}</span>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className='call-to-action__footer'
        >
          <span>Built with accessiblity in mind</span>
          <span>•</span>

          <span>Privacy First</span>

          <span>•</span>

          <span>Powered by GitHub</span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
