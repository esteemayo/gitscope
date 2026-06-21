'use client';

import { useRef } from 'react';
import { createPortal } from 'react-dom';

import SidebarFooter from '../sidebar/SidebarFooter';
import SidebarNav from '../sidebar/SidebarNav';
import SidebarHeader from '../sidebar/SidebarHeader';
import SidebarUser from '../sidebar/SidebarUser';
import SidebarCompare from '../sidebar/SidebarCompare';
import SidebarStats from '../sidebar/SidebarStats';

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
  });

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
          <SidebarHeader onClose={onClose} />

          <SidebarUser />

          <SidebarNav onClose={onClose} />

          <SidebarCompare onClose={onClose} />

          <SidebarStats />

          <SidebarFooter />
        </div>
      </aside>
    </div>
  );

  return !portalId ? null : createPortal(sidebarContent, portalId);
};

export default Sidebar;
