import ValueCard from './ValueCard';
import ComparisonTable from './ComparisonTable';

import { WhyGitScopeProps } from '@/types/about/whyGitScope/why.gitscope.type';
import '../../../styles/components/about/whyGitScope/WhyGitScope.scss';

const WhyGitScope = ({
  badge,
  title,
  description,
  values,
  comparison,
}: WhyGitScopeProps) => {
  return (
    <section className='why-gitscope'>
      <div className='why-gitscope__container'>
        <header className='why-gitscope__header'>
          <span className='why-gitscope__badge'>{badge}</span>

          <h2 className='why-gitscope__title'>{title}</h2>

          <p className='why-gitscope__description'>{description}</p>
        </header>

        <div className='why-gitscope__values'>
          {values.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>

        <div className='why-gitscope__comparison'>
          <ComparisonTable items={comparison} />
        </div>
      </div>
    </section>
  );
};

export default WhyGitScope;
