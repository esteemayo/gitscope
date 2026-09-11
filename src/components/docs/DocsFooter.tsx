'use client';

import Link from 'next/link';
import { DocsFooterProps } from '@/types/docs/docsFooter/docs.footer.type';

import '../../styles/components/docs/DocsFooter.scss';

const DocsFooter = ({ navItems }: DocsFooterProps) => {
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
            {navItems.map((item) => {
              const { title, links } = item;

              return (
                <div key={title} className='docs-footer__group'>
                  <span>{title}</span>

                  {links.map((link) => {
                    const { href, label } = link;

                    return (
                      <Link key={href} href={href}>
                        {label}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className='docs-footer__bottom'>
          <span>© {year} GitScope Inc.</span>

          <span>Designed with ❤ for developers</span>
        </div>
      </div>
    </footer>
  );
};

export default DocsFooter;
