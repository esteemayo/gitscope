'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import RetentionStatCard from './RetentionStatCard';
import RetentionCard from './RetentionCard';
import PrivacySectionHeader from '../PrivacySectionHeader';
import RetentionNotice from './RetentionNotice';

import { containerVariants } from '@/animations/page';
import { DataRetentionProps } from '@/types/privacy/dataRetention/data.retention.type';

import '../../../styles/components/privacy/dataRetention/DataRetention.scss';

const DataRetention = ({
  badge,
  title,
  subtitle,
  stats,
  categories,
  notice,
  className,
  style,
}: DataRetentionProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('data-retention', className)}
      style={style}
      aria-labelledby='data-retention-title'
    >
      <div className='data-retention__container'>
        <PrivacySectionHeader
          id='data-retention-title'
          badge={badge}
          title={title}
          subtitle={subtitle}
          variants={containerVariants}
        />

        <div className='data-retention__stats'>
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={containerVariants}>
              <RetentionStatCard {...stat} />
            </motion.div>
          ))}
        </div>

        <div className='data-retention__categories'>
          {categories.map((category) => (
            <motion.div key={category.id} variants={containerVariants}>
              <RetentionCard {...category} />
            </motion.div>
          ))}
        </div>

        <motion.div variants={containerVariants}>
          <RetentionNotice {...notice} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DataRetention;
