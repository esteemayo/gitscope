import { GitCompareArrows } from 'lucide-react';

import CompareForm from '../forms/CompareForm';
import { CompareHeroProps } from '@/types/compare/compare.hero.type';

import '../../styles/components/CompareHero.scss';

const CompareHero = ({
  userA,
  userB,
  isLoading,
  onChangeUserA,
  onChangeUserB,
  onSwap,
  onReset,
  onPreset,
  onSubmit,
}: CompareHeroProps) => {
  return (
    <section className='compare-hero'>
      <div className='compare-hero__container'>
        <header className='compare-hero__header'>
          <div className='compare-hero__icon'>
            <GitCompareArrows
              size={22}
              strokeWidth={1.8}
              role='img'
              aria-hidden='true'
              focusable='false'
            />
          </div>

          <div className='compare-hero__content'>
            <h3 className='compare-hero__content--title'>
              Compare GitHub Profiles
            </h3>

            <p className='compare-hero__content--description'>
              Analyze repositories, stars, followers, activity trends and
              contribution patterns side-by-side.
            </p>
          </div>
        </header>

        <div className='compare-hero__body'>
          <CompareForm
            userA={userA}
            userB={userB}
            isLoading={isLoading}
            onChangeUserA={onChangeUserA}
            onChangeUserB={onChangeUserB}
            onSwap={onSwap}
            onReset={onReset}
            onPreset={onPreset}
            onSubmit={onSubmit}
          />
        </div>

        <div className='compare-hero__bottom-line' aria-hidden='true' />
      </div>
    </section>
  );
};

export default CompareHero;
