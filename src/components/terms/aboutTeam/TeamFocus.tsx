'use client';

import TeamFocusItem from './TeamFocusItem';
import { TeamFocusProps } from '@/types/terms/aboutTeam/team.focus.type';

import '../../../styles/components/terms/aboutTeam/TeamFocus.scss';

const TeamFocus = ({ items }: TeamFocusProps) => {
  return (
    <section className='team-focus' aria-labelledby='team-focus-title'>
      <header className='team-focus__header'>
        <span className='team-focus__header--label'>What guides our work</span>

        <h3 id='team-focus-title' className='team-focus__header--title'>
          Built around the developer
        </h3>
      </header>

      <div className='team-focus__grid'>
        {items.map((item, index) => (
          <TeamFocusItem key={item.id} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TeamFocus;
