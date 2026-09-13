'use client';

import DocsHomeHero from './DocsHomeHero';
import DocsCard from './DocsCard';
import DocsHomeNext from './DocsHomeNext';
import DocsStep from './DocsStep';
import DocsHomeSection from './DocsHomeSection';

import { docsHomePage } from '@/data/docs/docsHomePage';
import '../../../styles/components/docs/home/DocsHome.scss';

const DocsHome = () => {
  return (
    <article className='docs-home'>
      <DocsHomeHero />

      <DocsHomeSection {...docsHomePage.quickStart.content}>
        <div className='docs-home__grid'>
          {docsHomePage.quickStart.cards.map((card) => (
            <DocsCard key={card.id} {...card} />
          ))}
        </div>
      </DocsHomeSection>

      <DocsHomeSection {...docsHomePage.howItWorks.content}>
        <div className='docs-home__pipeline'>
          {docsHomePage.howItWorks.steps.map((step, index) => (
            <DocsStep key={step.id} {...step} index={index} />
          ))}
        </div>
      </DocsHomeSection>

      <DocsHomeNext {...docsHomePage.nextSteps} />
    </article>
  );
};

export default DocsHome;
