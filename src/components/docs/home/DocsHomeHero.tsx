'use client';

import { ArrowRight } from 'lucide-react';
import '../../../styles/components/docs/home/DocsHomeHero.scss';

const DocsHomeHero = () => {
  return (
    <section id='introduction' className='docs-home-hero'>
      <span className='docs-home-hero__eyebrow'>GitScope Documentation</span>

      <h1 className='docs-home-hero__title'>
        Understand GitScope.
        <br />
        Build with confidence.
      </h1>

      <p className='docs-home-hero__paragraph'>
        Everything you need to understand GitScope, explore GitHub analytics and
        work with the platform.
      </p>

      <div className='docs-home-hero__actions'>
        <a href='#quick-start'>
          <span>Get Started</span>

          <ArrowRight
            size={14}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </a>

        <button type='button'>
          <span>Search Documentation</span>

          <kbd>⌘ K</kbd>
        </button>
      </div>
    </section>
  );
};

export default DocsHomeHero;
