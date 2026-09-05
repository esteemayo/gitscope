'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import TeamClosing from './TeamClosing';
import TeamFocus from './TeamFocus';
import TeamShowcase from './TeamShowcase';
import TeamIntro from './TeamIntro';
import TermsSectionHeader from '../TermsSectionHeader';
import TeamMembers from './TeamMembers';

import { containerVariants } from '@/animations/page';
import { AboutTeamProps } from '@/types/terms/aboutTeam/about.team.type';

import '../../../styles/components/terms/aboutTeam/AboutTeam.scss';

const AboutTeam = ({
  badge,
  title,
  description,
  headerIcon,
  intro,
  accentColor,
  teamVisual,
  focusItems,
  members,
  className,
  style,
}: AboutTeamProps) => {
  return (
    <motion.section
      id='about-team'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className={clsx('about-team', className)}
      style={
        {
          '--accent-color': accentColor,
          ...style,
        } as React.CSSProperties
      }
      aria-labelledby='about-team-title'
    >
      <div className='about-team__container'>
        <TermsSectionHeader
          id='about-team-title'
          badge={badge}
          title={title}
          description={description}
          icon={headerIcon}
          variants={containerVariants}
        />

        <div className='about-team__body'>
          <TeamIntro intro={intro} />

          <TeamShowcase teamVisual={teamVisual} />

          <TeamFocus items={focusItems} />

          <TeamMembers members={members} />

          <TeamClosing />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutTeam;
