import { WhyGitScopeProps } from '@/types/about/valueProposition/why.gitscope.type';
import '../../styles/components/about/WhyGitScope.scss';

const WhyGitScope = ({
  badge,
  title,
  description,
  values,
  comparison,
}: WhyGitScopeProps) => {
  return (
    <section className='about-why'>
      <div className='about-why__container'>WhyGitScope</div>
    </section>
  );
};

export default WhyGitScope;
