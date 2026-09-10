'use client';

import Link from 'next/link';
import '../../styles/components/docs/DocsFooter.scss';

const DocsFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='docs-footer'>
      <div className='docs-footer__container'>
        <div className='docs-footer__inner'>
          <div className='docs-footer__brand'>
            <Link href='/' className='docs-footer__brand--logo'>
              GitScope
            </Link>

            <p className='docs-footer__brand--label'>
              GitHub analytics built for developers.
            </p>
          </div>

          <div className='docs-footer__links'>
            <div className='docs-footer__group'>
              <span>Documentation</span>

              <Link href='/documentation'>Getting Started</Link>

              <Link href='/documentation/features/guthub-analytics'>
                Features
              </Link>

              <Link href='/documentation/api'>API</Link>
            </div>

            <div className='docs-footer__group'>
              <span>Product</span>

              <Link href='/'>Dashboard</Link>

              <Link href='/about'>About</Link>

              <Link href='/privacy'>Privacy</Link>
            </div>

            <div className='docs-footer__group'>
              <span>Resources</span>

              <Link href='/documentation/resources/faq'>FAQ</Link>

              <Link href='/documentation/resources/changelog'>Changelog</Link>

              <Link href='/documentation/resources/roadmap'>Roadmap</Link>
            </div>
          </div>
        </div>

        <div className='docs-footer__bottom'>
          <span>© {year} GitScope</span>

          <span>Designed with ❤ for developers</span>
        </div>
      </div>
    </footer>
  );
};

export default DocsFooter;
