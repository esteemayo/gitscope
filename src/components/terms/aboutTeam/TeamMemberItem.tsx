'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { TeamMemberItemProps } from '@/types/terms/aboutTeam/team.member.item.type';
import '../../../styles/components/terms/aboutTeam/TeamMemberItem.scss';

const TeamMemberItem = ({
  name,
  role,
  description,
  image,
  accentColor,
  index,
  className,
  style,
}: TeamMemberItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx('team-member-item', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <div className='team-member-item__image'>
        <Image src={image} alt={name} fill sizes='90px' />
      </div>

      <div className='team-member-item__content'>
        <span className='team-member-item__content--role'>{role}</span>

        <h4 className='team-member-item__content--name'>{name}</h4>

        <p className='team-member-item__content--description'>{description}</p>
      </div>
    </motion.article>
  );
};

export default TeamMemberItem;
