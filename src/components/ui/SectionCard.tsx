'use client';

import { motion } from 'framer-motion';
import '../../styles/components/SectionCard.scss';

interface SectionCardProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

const SectionCard = ({
  title,
  description,
  action,
  children,
}: SectionCardProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3 }}
      className='section-card'
    >
      <header className='section-card__header'>
        <div className='section-card__container'>
          <h2 className='section-card__title'>{title}</h2>

          <p className='section-card__description'>{description}</p>
        </div>

        <div className='section-card__action'>{action}</div>
      </header>

      <div className='section-card__content'>{children}</div>
    </motion.section>
  );
};

export default SectionCard;
