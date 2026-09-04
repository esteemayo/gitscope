'use client';

import TeamMemberItem from './TeamMemberItem';
import { TeamMembersProps } from '@/types/terms/aboutTeam/team.members.type';

import '../../../styles/components/terms/aboutTeam/TeamMembers.scss';

const TeamMembers = ({ members }: TeamMembersProps) => {
  if (members.length === 0) {
    return null;
  }

  return (
    <section className='team-members' aria-labelledby='team-members-title'>
      <header className='team-members__header'>
        <span className='team-members__header--label'>The team</span>

        <h3 id='team-members-title' className='team-members__header--title'>
          The people building GitScope
        </h3>
      </header>

      <div className='team-members__list'>
        {members.map((member, index) => (
          <TeamMemberItem key={member.id} {...member} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
