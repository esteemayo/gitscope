'use client';

import { useSession } from 'next-auth/react';

import UserAvatar from '../ui/UserAvatar';
import { useGithubUser } from '@/hooks/useGithubUser';

import '../../styles/components/sidebar/SidebarUserCard.scss';

const SidebarUserCard = () => {
  const { data: githubUser } = useGithubUser();
  const { data: session } = useSession();

  console.log(githubUser);

  if (!session) return null;

  return (
    <section className='sidebar-user-card'>
      <div className='sidebar-user-card__avatar'>
        <UserAvatar
          src={session.user.image! ?? githubUser?.avatar_url}
          name={session.user.name! ?? githubUser?.name}
          size={50}
          alt={session.user.name ?? githubUser?.login ?? 'Avatar'}
        />
      </div>

      <div className='sidebar-user-card__info'>
        <h3 className='sidebar-user-card__info--name'>
          {session.user.name ?? githubUser?.name}
        </h3>

        <span className='sidebar-user-card__info--username'>
          @{githubUser?.login}
        </span>
      </div>
    </section>
  );
};

export default SidebarUserCard;
