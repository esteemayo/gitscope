'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import AudienceCard from './AudienceCard';
import SectionIntro from '@/components/ui/SectionIntro';

import { containerVariants } from '@/animations/page';
import { WhoItsForProps } from '@/types/about/whoItsFor/who.its.for.type';

import '../../../styles/components/about/whoItsFor/WhoItsFor.scss';

const WhoItsFor = ({
  badge,
  title,
  description,
  audiences,
  accentColor,
  className,
  style,
}: WhoItsForProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('who-its-for', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-describedby='who-its-for-title'
    >
      <div className='who-its-for__container'>
        <SectionIntro
          id='who-its-for-title'
          badge={badge}
          title={title}
          description={description}
          accentColor={accentColor}
          variants={containerVariants}
        />

        <div className='who-its-for__grid'>
          {audiences.map((audience, index) => (
            <AudienceCard key={audience.id} {...audience} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhoItsFor;
