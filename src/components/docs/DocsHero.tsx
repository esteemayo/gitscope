import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import '../../styles/components/docs/DocsHero.scss';

interface DocsHeroProps {
  title: string;
  description: string;
}

const DocsHero = ({ title, description }: DocsHeroProps) => {
  return (
    <section className='docs-hero' aria-labelledby='docs-hero-title'>
      <div className='docs-hero__inner'>
        <div className='docs-hero__content'>
          <span className='docs-hero__eyebrow'>Documentation</span>

          <h1 id='docs-hero-title' className='docs-hero__title'>
            {title}
          </h1>

          <p className='docs-hero__description'>{description}</p>

          <div className='docs-hero__actions'>
            <Link
              href='#what-is-gitscope'
              className='docs-hero__actions--primary'
            >
              <span>Start reading</span>

              <ArrowRight
                size={16}
                strokeWidth={1.8}
                role='img'
                aria-hidden='true'
                focusable='false'
              />
            </Link>
          </div>
        </div>

        <div className='docs-hero__search'>
          <div className='docs-hero__search-header'>
            <span>Search the documentation</span>

            <div className='docs-hero__search-status'>
              <kbd>⌘</kbd>

              <span>K</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsHero;
