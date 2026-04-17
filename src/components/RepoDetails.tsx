import '../styles/components/RepoDetails.scss';

const RepoDetails = () => {
  return (
    <div className='repo-details'>
      <div className='repo-details__container'>
        <header className='repo-details__header'>
          <h1 className='repo-details__heading'>albumz-api</h1>

          <a
            href='#'
            className='repo-details__link'
            target='_blank'
            rel='noopener noreferrer'
          >
            View on GitHub
          </a>
        </header>

        <p className='repo-details__desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias fugiat consectetur
          cumque voluptate tempore quis. Veniam, unde! Inventore nam harum, aliquam laudantium
          quisquam ex quod itaque assumenda dolor quo!
        </p>

        <section className='repo-details__stats'>
          <div>200</div>
          <div>43</div>
          <div>JavaScript</div>
          <div>3 Issues</div>
        </section>

        <section className='repo-details__meta'>
          <span>
            Created: <time dateTime=''>{new Date().toDateString()}</time>
          </span>
          <span>
            Updated: <time dateTime=''>{new Date().toDateString()}</time>
          </span>
          <span>
            Default branch: main
          </span>
        </section>
      </div>
    </div>
  );
};

export default RepoDetails;
