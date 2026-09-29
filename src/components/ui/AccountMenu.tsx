'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Bookmark, ChevronDown, LogOut, UserRound } from 'lucide-react';
import { useState } from 'react';

import UserAvatar from './UserAvatar';

import '../../styles/components/ui/AccountMenu.scss';

const AccountMenu = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((value) => !value);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!user) {
    return null;
  }

  return (
    <div className='account'>
      <button
        type='button'
        onClick={handleToggle}
        className='account__btn'
        aria-expanded={isOpen}
        aria-haspopup='menu'
        aria-label='Open account menu'
      >
        <UserAvatar
          src={user.image!}
          size={32}
          alt={user.name!}
          name={user.name!}
        />

        <ChevronDown size={14} />
      </button>

      {isOpen && (
        <div className='account-menu' role='menu'>
          <div className='account-menu__header'>
            <UserAvatar
              src={user.image!}
              size={32}
              alt={user.name!}
              name={user.name!}
            />

            <div className='account-menu__identity'>
              <strong className='account-menu__identity--name'>
                {user.name ?? 'GitHub user'}
              </strong>

              {user.email && (
                <span className='account-menu__identity--email'>
                  {user.email}
                </span>
              )}
            </div>
          </div>

          <div className='account-menu__divider' />

          <div className='account-menu__items'>
            <Link
              href='/profile'
              onClick={handleClose}
              className='account-menu__items--link'
              role='menuitem'
            >
              <UserRound
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span>My profile</span>
            </Link>

            <Link
              href='/saved'
              onClick={handleClose}
              className='account-menu__items--link'
              role='menuitem'
            >
              <Bookmark
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />

              <span>Saved profiles</span>
            </Link>
          </div>

          <div className='account-menu__divider' />

          <button
            type='button'
            role='menuitem'
            className='account-menu__logout'
          >
            <LogOut
              size={16}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />

            <span>Sign out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
