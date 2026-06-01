import SectionHeader from '../ui/SectionHeader';
import CompareForm from '../forms/CompareForm';
import GitScopeSectionIcon from '../icons/GitScopeSectionIcon';

import { CompareHeroProps } from '@/types/compare.hero.type';

const CompareHero = ({
  userA,
  userB,
  isLoading,
  onChangeUserA,
  onChangeUserB,
  onSubmit,
}: CompareHeroProps) => {
  return (
    <section className='compare-hero'>
      <SectionHeader
        icon={<GitScopeSectionIcon />}
        size='lg'
        title='Compare GitHub Profiles'
        description='Analyze repositories, stars, followers, activity trends and contribution patterns side-by-side'
      />

      <CompareForm
        userA={userA}
        userB={userB}
        isLoading={isLoading}
        onChangeUserA={onChangeUserA}
        onChangeUserB={onChangeUserB}
        onSubmit={onSubmit}
      />
    </section>
  );
};

export default CompareHero;
