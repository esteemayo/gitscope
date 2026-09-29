'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import AccountMenu from '../ui/AccountMenu';
import MenuButton from '../ui/MenuButton';
import ThemeToggle from '../ui/ThemeToggle';

import GitHubLogoIcon from '../icons/GitHubLogoIcon';

import { navItems } from '@/data/navbar.data';
import { useSidebar } from '@/context/SidebarContext';

import '../../styles/components/Navbar.scss';

const Navbar = () => {
  const { onOpen } = useSidebar();
  const pathname = usePathname();
  const { status } = useSession();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 ? true : false);
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const isAuthenticated = status === 'authenticated';

  return (
    <header
      className={clsx('navbar', {
        'navbar scrolled': isScrolled,
      })}
    >
      <div className='navbar__inner'>
        <Link href='/' className='navbar__logo' aria-label='GitScope home'>
          <span className='navbar__logo--mark'>Git</span>

          <span className='navbar__logo--text'>Scope</span>
        </Link>

        <nav className='navbar__nav' aria-label='Main navigation'>
          {navItems.map((item) => {
            const { href, label, icon: Icon } = item;

            const isActive =
              pathname === href ||
              (href !== '/' && pathname.startsWith(`${href}/`));

            return (
              <Link
                key={href}
                href={href}
                className='navbar__nav--link'
                aria-current={isActive ? 'page' : undefined}
              >
                {Icon && (
                  <Icon
                    size={15}
                    strokeWidth={1.8}
                    role='img'
                    aria-hidden='true'
                    focusable='false'
                  />
                )}

                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className='navbar__actions'>
          <ThemeToggle />

          <a
            href='https://github.com/esteemayo/gitscope'
            className='navbar__actions--github-link'
            rel='noopenner noreferrer'
            target='_blank'
            aria-label='GitScope GitHub repository'
          >
            <GitHubLogoIcon />

            <span>GitHub</span>
          </a>

          {isAuthenticated ? (
            <AccountMenu />
          ) : (
            <button type='button' className='navbar__login-btn'>
              Sign in
            </button>
          )}

          <MenuButton onClick={onOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
