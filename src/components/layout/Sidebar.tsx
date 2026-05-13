'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';

import Logo from '../ui/Logo';

import BookmarkIcon from '../icons/BookmarkIcon';
import XmarkIcon from '../icons/XmarkIcon';
import GitHubLogoIcon from '../icons/GitHubLogoIcon';
import CompareIcon from '../icons/CompareIcon';
import AnalyticsIcon from '../icons/AnalyticsIcon';

import { usePortal } from '@/hooks/usePortal';
import { useOverlay } from '@/hooks/useOverlay';

import { useTheme } from '@/context/ThemeContext';
import { THEMEBUTTONS } from '@/data/theme';
import { useSidebar } from '@/context/SidebarContext';

import '../../styles/components/Sidebar.scss';

const Sidebar = () => {
  const { isOpen, onClose } = useSidebar();
  const { theme, setTheme } = useTheme();
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
          <header className='sidebar__header'>
            <div className='sidebar__branding'>
              <div className='sidebar__logo'>
                <Logo />
              </div>

              <div className='sidebar__text'>
                <h2 className='sidebar__text--heading'>GitScope</h2>
                <p className='sidebar__text--desc'>Developer analytics</p>
              </div>
            </div>

            <button
              type='button'
              onClick={onClose}
              className='sidebar__close'
              aria-label='Close sidebar'
            >
              <XmarkIcon />
            </button>
          </header>

          <nav className='sidebar__nav' aria-label='Sidebar navigation'>
            <ul className='sidebar__list'>
              <li onClick={onClose} className='sidebar__item'>
                <a
                  href='https://github.com/esteemayo'
                  className='sidebar__item--link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='sidebar__item--icon'>
                    <GitHubLogoIcon />
                  </span>

                  <span className='sidebar__item--label'>GitHub</span>
                </a>
              </li>

              <li onClick={onClose} className='sidebar__item'>
                <Link href='/compare' className='sidebar__item--link'>
                  <span className='sidebar__item--icon'>
                    <CompareIcon />
                  </span>

                  <span className='sidebar__item--label'>Compare</span>
                </Link>
              </li>

              <li onClick={onClose} className='sidebar__item'>
                <Link href='/analytics' className='sidebar__item--link'>
                  <span className='sidebar__item--icon'>
                    <AnalyticsIcon />
                  </span>

                  <span className='sidebar__item--label'>Analytics</span>
                </Link>
              </li>

              <li onClick={onClose} className='sidebar__item'>
                <Link href='/saved' className='sidebar__item--link'>
                  <span className='sidebar__item--icon'>
                    <BookmarkIcon />
                  </span>

                  <span className='sidebar__item--label'>Saved</span>
                </Link>
              </li>
            </ul>
          </nav>

          <section className='sidebar__card'>
            <article className='sidebar__card-item'>
              <span className='sidebar__card-item--label'>
                Repositories synced
              </span>

              <strong className='sidebar__card-item--value'>128</strong>
            </article>

            <div className='sidebar__divider' />

            <article className='sidebar__card-item'>
              <span className='sidebar__card-item--label'>
                Last update
              </span>

              <time
                dateTime={new Date().toISOString()}
                className='sidebar__card-item--value'
              >
                2 mins ago
              </time>
            </article>
          </section>


          <footer className='sidebar__footer'>
            <div className='sidebar__theme-toggle'>
              {THEMEBUTTONS.map((item) => {
                const { id, label, icons } = item;
                const {
                  default: DefaultIcon,
                  mobile: MobileIcon,
                  desktop: DesktopIcon,
                } = icons;

                const isActive = theme === id;

                return (
                  <button
                    key={id}
                    type='button'
                    onClick={() => setTheme(id)}
                    className={isActive ?
                      'sidebar__theme-toggle--btn active' :
                      'sidebar__theme-toggle--btn'
                    }
                    aria-label={`${label} mode`}
                  >
                    {DefaultIcon && <DefaultIcon />}
                    {DesktopIcon && <DesktopIcon />}
                  </button>
                )
              })}
            </div>

            <p className='sidebar__copyright'>
              &copy; {new Date().getFullYear()} GitScope, Inc.
            </p>
          </footer>

          {/* <button
            type='button'
            onClick={onClose}
            className='sidebar__btn-close'
          >
            <XmarkIcon />
          </button> */}
        </div>
      </aside>
    </div>
  );

  return !portalId ? null : createPortal(sidebarContent, portalId);
};

export default Sidebar;
