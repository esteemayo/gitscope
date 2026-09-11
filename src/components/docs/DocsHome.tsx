'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import DocsCard from './DocsCard';
import { quickStartCards } from '@/data/docs/docs-card.data';

import '../../styles/components/docs/DocsHome.scss';

const DocsHome = () => {
  return (
    <article className='docs-home'>
      <section id='introduction' className='docs-home__hero'>
        <span className='docs-home__eyebrow'>GitScope Documentation</span>

        <h1 className='docs-home__title'>
          Understand GitScope.
          <br />
          Build with confidence.
        </h1>

        <p className='docs-home__paragraph'>
          Everything you need to understand GitScope, explore GitHub analytics
          and work with the platform.
        </p>

        <div className='docs-home__actions'>
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
            <kbd> K</kbd>
          </button>
        </div>
      </section>

      <section id='quick-start' className='docs-home__section'>
        <div className='docs-home__section-heading'>
          <span className='docs-home__section-heading--label'>
            Explore the docs
          </span>

          <h2 className='docs-home__section-heading--title'>
            Everything you need to get started.
          </h2>

          <p className='docs-home__section-heading--description'>
            Start with the fundamentals, explore GitScope features, or jump
            directly into the API.
          </p>
        </div>

        <div className='docs-home__grid'>
          {quickStartCards.map((card) => (
            <DocsCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      <section
        id='how-it-works'
        className='docs-home__section docs-home__section--compact'
      >
        <div className='docs-home__section-heading'>
          <span className='docs-home__section-heading--label'>
            How it works
          </span>

          <h2 className='docs-home__section-heading--title'>
            From GitHub data to useful insights.
          </h2>

          <p className='docs-home__section-heading--description'>
            GitScope collects GitHub data, processes it into meaningful metrics,
            then presents those insights through an accessible analytics
            interface.
          </p>
        </div>

        <div className='docs-home__pipeline'>
          <div className='docs-home__step'>
            <span className='docs-home__step--number'>01</span>

            <strong className='docs-home__step--label'>GitHub</strong>

            <p className='docs-home__step--description'>
              Connect your GitHub profile.
            </p>
          </div>

          <div className='docs-home__step'>
            <span className='docs-home__step--number'>02</span>

            <strong className='docs-home__step--label'>Data</strong>

            <p className='docs-home__step--description'>
              Retrieve and organize relevant data.
            </p>
          </div>

          <div className='docs-home__step'>
            <span className='docs-home__step--number'>03</span>

            <strong className='docs-home__step--label'>Analytics</strong>

            <p className='docs-home__step--description'>
              Transform data into useful metrics.
            </p>
          </div>

          <div className='docs-home__step'>
            <span className='docs-home__step--number'>04</span>

            <strong className='docs-home__step--label'>Insights</strong>

            <p className='docs-home__step--description'>
              Explore your developer profile.
            </p>
          </div>
        </div>
      </section>

      <section id='next-steps' className='docs-home__next'>
        <span className='docs-home__next--label'>Ready to start?</span>

        <h2 className='docs-home__next--title'>Start with Getting Started.</h2>

        <Link href='/documentation' className='docs-home__next--action'>
          <span>Read the guide</span>

          <ArrowRight
            size={14}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />
        </Link>
      </section>
    </article>
  );
};

export default DocsHome;
