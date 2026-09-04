'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { TeamVisualProps } from '@/types/terms/aboutTeam/team.visual.type';
import '../../../styles/components/terms/aboutTeam/TeamVisual.scss';

const TeamVisual = ({
  image,
  imageAlt,
  eyebrow,
  label,
  accentColor,
  className,
  style,
}: TeamVisualProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={clsx('team-visual', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='team-visual__frame'>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes='(max-width: 900px) 100vw, 50vw'
          className='team-visual__image'
          priority={false}
        />

        <div className='team-visual__overlay' aria-hidden='true' />

        <div className='team-visual__label'>
          <span className='team-visual__label--eyebrow'>{eyebrow}</span>

          <strong className='team-visual__label--value'>{label}</strong>
        </div>
      </div>

      <div className='team-visual__accent-line' aria-hidden='true' />
    </motion.div>
  );
};

export default TeamVisual;
