'use client';

import { useSession } from 'next-auth/react';
import UserAvatar from '../ui/UserAvatar';

import '../../styles/components/sidebar/SidebarUser.scss';

const SidebarUser = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <section className='sidebar-user'>
      <div className='sidebar-user__avatar'>
        <UserAvatar
          src={session.user.image!}
          name={session.user.name!}
          size={50}
          alt={session.user.name ?? 'Avatar'}
        />
      </div>

      <div className='sidebar-user__info'>
        <h3 className='sidebar-user__info--name'>{session.user.name}</h3>

        <span className='sidebar-user__info--username'>@esteemayo</span>
      </div>
    </section>
  );
};

export default SidebarUser;
