'use client';

import { motion } from 'framer-motion';

import AudienceCard from './AudienceCard';
import AboutSectionHeader from '../AboutSectionHeader';

import { containerVariants } from '@/animations/about';
import { WhoItsForProps } from '@/types/about/whoItsFor/who.its.for.type';

import '../../../styles/components/about/whoItsFor/WhoItsFor.scss';

const WhoItsFor = ({
  badge,
  title,
  description,
  audiences,
}: WhoItsForProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25 }}
      className='who-its-for'
      aria-describedby='who-its-for-title'
    >
      <div className='who-its-for__container'>
        <AboutSectionHeader
          id='who-its-for-title'
          badge={badge}
          title={title}
          description={description}
          variants={containerVariants}
        />

        <div className='who-its-for__grid'>
          {audiences.map((audience) => (
            <AudienceCard
              key={audience.id}
              audience={audience}
              variants={containerVariants}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhoItsFor;
