'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import ComparisonTable from './ComparisonTable';
import ValueCard from './ValueCard';
import SectionIntro from '@/components/ui/SectionIntro';

import { containerVariants } from '@/animations/page';
import { WhyGitScopeProps } from '@/types/about/whyGitScope/why.gitscope.type';

import '../../../styles/components/about/whyGitScope/WhyGitScope.scss';

const WhyGitScope = ({
  badge,
  title,
  description,
  values,
  comparison,
  accentColor,
  className,
  style,
}: WhyGitScopeProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('why-gitscope', className)}
      style={
        {
          '--accent-colo': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div
        className='why-gitscope__container'
        aria-labelledby='why-gitscope-title'
      >
        <SectionIntro
          id='why-gitscope-title'
          badge={badge}
          title={title}
          description={description}
          accentColor={accentColor}
          variants={containerVariants}
        />

        <div className='why-gitscope__values'>
          {values.map((value) => (
            <ValueCard key={value.id} {...value} variants={containerVariants} />
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
