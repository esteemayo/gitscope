import { motion, Variants } from 'framer-motion';

import AboutStatCard from './AboutStatCard';
import { AboutStatsProps } from '@/types/about/stats/about.stats.type';

import '../../../styles/components/about/stats/AboutStats.scss';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const AboutStats = ({ title, description, stats }: AboutStatsProps) => {
  return (
    <section className='about-stats'>
      <div className='about-stats__container'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className='about-stats__header'
        >
          <span className='about-stats__header--eyebrow'>
            Trusted by Developers
          </span>

          <h2 id='about-stats-title' className='about-stats__header--title'>
            {title}
          </h2>

          <p className='about-stats__header--description'>{description}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.25 }}
          className='about-stats__grid'
        >
          {stats.map((stat, index) => (
            <AboutStatCard key={stat.id} {...stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStats;
