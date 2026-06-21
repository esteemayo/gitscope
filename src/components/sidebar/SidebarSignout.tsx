'use client';

import { LogOutIcon } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

import '../../styles/components/sidebar/SidebarSignout.scss';

const SidebarSignout = () => {
  const { status } = useSession();

  if (status === 'unauthenticated') return null;

  return (
    <button type='button' onClick={() => signOut()} className='sidebar-signout'>
      <LogOutIcon size={20} />

      <span>Sign out</span>
    </button>
  );
};

export default SidebarSignout;
