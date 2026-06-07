import { RepoHeroProps } from '@/types/repo/repo.hero.type';
import '../../styles/components/repo/RepoHero.scss';

const RepoHero = ({ repo }: RepoHeroProps) => {
  return (
    <section className='repo-hero'>
      <div className='repo-hero__avatar'>
        {(repo.language ?? repo.name).slice(0, 2).toUpperCase()}
      </div>

      <div className='repo-hero__content'>
        <span className='repo-hero__label'>Public repository</span>

        <h1 className='repo-hero__title'>albumz</h1>

        <p className='repo-hero__description'>
          {repo.description ?? 'No description provided.'}
        </p>
      </div>

      <div className='repo-hero__actions'>
        <a
          href={repo.html_url}
          target='_blank'
          rel='noopener noreferrer'
          className='repo-hero__actions--link'
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default RepoHero;
