'use client';

import { motion } from 'framer-motion';
import { StackCardProps } from '@/types/about/technologyStack/stack.card.type';

import '../../../styles/components/about/technologyStack/StackCard.scss';

const StackCard = ({
  stack: { icon: Icon, title, description, accentColor, technologies },
  variants,
}: StackCardProps) => {
  return (
    <motion.article
      variants={variants}
      className='stack-card'
      style={
        {
          '--accent-color': accentColor,
        } as React.CSSProperties
      }
    >
      <header className='header stack-card__header'>
        <div className='stack-card__icon'>
          <Icon size={28} />
        </div>

        <div className='stack-card__content'>
          <h3 className='stack-card__content--title'>{title}</h3>

          <p className='stack-card__content--description'>{description}</p>
        </div>
      </header>

      <div className='stack-card__divider' />

      <div className='stack-card__chips'>
        {technologies.map((technology) => (
          <span key={technology} className='stack-card__chip'>
            {technology}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default StackCard;
