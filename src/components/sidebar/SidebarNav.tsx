'use client';

import { usePathname } from 'next/navigation';

import SidebarNavItem from './SidebarNavItem';

import { sidebarLinks } from '@/data';
import { useGithubUser } from '@/hooks/useGithubUser';

import '../../styles/components/sidebar/SidebarNav.scss';

const SidebarNav = ({ onClose }: { onClose(): void }) => {
  const pathname = usePathname();
  const { data: githubUser } = useGithubUser();

  const [firstLink, ...otherLinks] = sidebarLinks;
  const Icon = firstLink.icon;

  return (
    <nav className='sidebar-nav' aria-label='Sidebar navigation'>
      <ul className='sidebar-nav__list'>
        {githubUser?.login && (
          <li onClick={onClose} className='sidebar-nav__item'>
            <a
              href={`https://github.com/${githubUser.login}`}
              className='sidebar-nav__item--link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='sidebar-nav__item--icon'>
                <Icon />
              </span>

              <span className='sidebar-nav__item--label'>
                {firstLink.label}
              </span>
            </a>
          </li>
        )}

        {otherLinks.map((item) => {
          const { id, url } = item;
          const isActive = pathname === url;

          return (
            <li key={id} onClick={onClose} className='sidebar-nav__item'>
              <SidebarNavItem {...item} isActive={isActive} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarNav;
