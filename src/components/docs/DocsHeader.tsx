'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

import DocsSearch from './DocsSearch';
import GitHubLogoIcon from '../icons/GitHubLogoIcon';

import '../../styles/components/docs/DocsHeader.scss';

const DocsHeader = () => {
  return (
    <header className='docs-header'>
      <div className='docs-header__inner'>
        <div className='docs-header__left'>
          <button
            type='button'
            className='docs-header__menu'
            aria-label='Open documentation navigation'
          >
            <Menu size={20} />
          </button>

          <Link href='/' className='docs-header__brand'>
            <span className='docs-header__brand--logo'>G</span>

            <span className='docs-header__brand--name'>GitScope</span>

            <span className='docs-header__brand--docs'>Docs</span>
          </Link>
        </div>

        <div className='docs-header__search'>
          <DocsSearch />
        </div>

        <div className='docs-header__actions'>
          <Link href='/' className='docs-header__actions--dashboard'>
            Dashboard
          </Link>

          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='docs-header__actions--github'
            aria-label='GitHub'
          >
            <GitHubLogoIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default DocsHeader;
