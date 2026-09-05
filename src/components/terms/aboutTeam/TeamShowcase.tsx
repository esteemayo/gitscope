'use client';

import TeamVisual from './TeamVisual';
import { AboutTeamShowcaseProps } from '@/types/terms/aboutTeam/about.team.showcase.type';

import '../../../styles/components/terms/aboutTeam/TeamShowcase.scss';

const TeamShowcase = ({ teamVisual }: AboutTeamShowcaseProps) => {
  return (
    <div className='team-showcase'>
      <TeamVisual {...teamVisual} />

      <div className='team-showcase__content'>
        <span className='team-showcase__content--label'>
          A focused team with a developer-first approach
        </span>

        <h3 className='team-showcase__content--title'>
          We build GitScope to make GitHub activity easier to understand.
        </h3>

        <p className='team-showcase__content--paragraph'>
          GitScope combines data, engineering, and interface design to give
          developers a clearer view of their repositories, activity, and public
          GitHub presence.
        </p>

        <p className='team-showcase__content--paragraph'>
          Our goal is to keep the experience useful, accessible, and focused on
          information that helps developers understand their work.
        </p>
      </div>
    </div>
  );
};

export default TeamShowcase;
