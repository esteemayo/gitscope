'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

import { AboutStatCardProps } from '@/types/about/about.stat.card.type';
import '../../styles/components/about/AboutStatCard.scss';

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const AboutStatCard = ({
  icon: Icon,
  value,
  label,
  trend,
  trendLabel,
  index,
}: AboutStatCardProps) => {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: index * -10 }}
      transition={{
        duration: 0.25,
        ease: [0.645, 0.045, 0.355, 1] as const,
      }}
      className='about-stat-card'
    >
      <div className='about-stat-card__glow' />

      <div className='about-stat-card__icon'>
        <Icon size={30} />
      </div>

      <div className='about-stat-card__content'>
        <div className='about-stat-card__content--metric'>{value}</div>

        <h3 className='about-stat-card__content--label'>{label}</h3>
      </div>

      <footer className='about-stat-card__footer'>
        <span className='about-stat-card__footer--trend'>
          <ArrowUpRight size={15} />
          {trend}
        </span>

        <small className='about-stat-card__footer--trend-label'>
          {trendLabel}
        </small>
      </footer>
    </motion.article>
  );
};

export default AboutStatCard;
