'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import Logo from '../ui/Logo';
import '../../styles/components/Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50 ? true : false);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='navbar__container'>
        <Logo />

        <Link href='/compare' className='navbar__link'>Compare</Link>
      </div>
    </nav>
  );
};

export default Navbar;
