import '../../styles/components/repo/RepoHero.scss';

const RepoHero = () => {
  return (
    <section className='repo-hero'>
      <div className='repo-hero__avatar'>AL</div>

      <div className='repo-hero__content'>
        <span className='repo-hero__label'>Public repository</span>

        <h1 className='repo-hero__title'>albumz</h1>

        <p className='repo-hero__description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          consequatur dolore. Fuga sunt ducimus quae sed. Incidunt non aperiam
          repellat omnis architecto dolor atque, vitae odio cum suscipit ab
          reiciendis! {'No description provided'}
        </p>
      </div>

      <div className='repo-hero__actions'>
        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='btn__primary'
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default RepoHero;
