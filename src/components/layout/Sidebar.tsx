'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';

import XmarkIcon from '../icons/XmarkIcon';
import ThemeToggle from '../ui/ThemeToggle';

import { useOverlay } from '@/hooks/useOverlay';
import { usePortal } from '@/hooks/usePortal';
import { useSidebar } from '@/context/SidebarContext';

import '../../styles/components/Sidebar.scss';

const Sidebar = () => {
  const { isOpen, onClose } = useSidebar();
  const { portalId } = usePortal('overlay-root');

  const sidebarRef = useRef<HTMLElement | null>(null);

  useOverlay(sidebarRef, {
    isOpen,
    onClose,
  })

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const sidebarContent = (
    <div
      onClick={handleClose}
      className={isOpen ? 'overlay visible' : 'overlay hidden'}
    >
      <aside
        ref={sidebarRef}
        className={isOpen ? 'sidebar visible' : 'sidebar hidden'}
        tabIndex={-1}
      >
        <div className='sidebar__container'>
          <ul className='sidebar__list'>
            <li onClick={onClose} className='sidebar__item'>
              <a
                href='https://github.com/esteemayo'
                className='sidebar__item--link'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </li>

            <li onClick={onClose} className='sidebar__item'>
              <Link href='/compare' className='sidebar__item--link'>
                Compare
              </Link>
            </li>
          </ul>

          <div className='sidebar__copyright'>
            <div className='sidebar__copyright--theme'>
              <ThemeToggle />
            </div>

            <p className='sidebar__copyright--text'>
              &copy; {new Date().getFullYear()} GitScope, Inc. All rights reserved.
            </p>
          </div>

          <button
            type='button'
            onClick={onClose}
            className='sidebar__btn-close'
          >
            <XmarkIcon />
          </button>
        </div>
      </aside>
    </div>
  );

  return !portalId ? null : createPortal(sidebarContent, portalId);
};

export default Sidebar;
