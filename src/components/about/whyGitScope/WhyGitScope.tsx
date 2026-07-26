'use client';

import { motion } from 'framer-motion';

import ComparisonTable from './ComparisonTable';
import ValueCard from './ValueCard';
import AboutSectionHeader from '../AboutSectionHeader';

import { containerVariants } from '@/animations/about';
import { WhyGitScopeProps } from '@/types/about/whyGitScope/why.gitscope.type';

import '../../../styles/components/about/whyGitScope/WhyGitScope.scss';

const WhyGitScope = ({
  badge,
  title,
  description,
  values,
  comparison,
}: WhyGitScopeProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.25, margin: '-50px' }}
      className='why-gitscope'
    >
      <div
        className='why-gitscope__container'
        aria-labelledby='why-gitscope-title'
      >
        <AboutSectionHeader
          id='why-gitscope-title'
          badge={badge}
          title={title}
          description={description}
          variants={containerVariants}
        />

        <div className='why-gitscope__values'>
          {values.map((value) => (
            <ValueCard
              key={value.id}
              value={value}
              variants={containerVariants}
            />
          ))}
        </div>

        <div className='why-gitscope__comparison'>
          <ComparisonTable items={comparison} variants={containerVariants} />
        </div>
      </div>
    </motion.section>
  );
};

export default WhyGitScope;
