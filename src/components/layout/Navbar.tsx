'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import BarsIcon from '../icons/BarsIcon';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';

import { useSidebar } from '@/context/SidebarContext';
import '../../styles/components/Navbar.scss';

const Navbar = () => {
  const { onOpen } = useSidebar();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 ? true : false);
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='navbar__container'>
        <Logo />

        <div className='navbar__wrapper'>
          <ThemeToggle />

          <Link href='/compare' className='navbar__link'>
            Compare
          </Link>

          <Link href='/saved' className='navbar__link'>
            Saved
          </Link>
        </div>

        <button type='button' onClick={onOpen} className='navbar__toggle'>
          <BarsIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
