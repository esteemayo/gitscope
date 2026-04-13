import '../../styles/components/RepoCard.scss';

const RepoCard = () => {
  return (
    <article className='repo-card' tabIndex={0}>
      <a
        href='#'
        className='repo-card__link'
        target='_blank'
        rel='noopener noreferrer'
        tabIndex={-1}
      >
        <div className='repo-card__top'>
          <div className='repo-card__name'>
            <svg
              role='img'
              aria-hidden='true'
              focusable='false'
              height='16'
              viewBox='0 0 12 16'
              width='12'
            >
              <path
                fillRule='evenodd'
                d='M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z'
              />
            </svg>

            <h3 className='repo-card__name--title'>albumz-api</h3>
          </div>

          <p className='repo-card__desc'>
            User password authentication and email verification using passport and passport-local.
          </p>
        </div>

        <div className='repo-card__stats'>
          <div className='repo-card__stats--left'>
            <span>
              <div className='language'>&nbsp;</div>
              JavaScript
            </span>

            <span>
              <svg
                role='img'
                aria-hidden='true'
                focusable='false'
                viewBox='0 0 14 16'
                height='16'
                width='14'
              >
                <path
                  fillRule='evenodd'
                  d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z'
                />
              </svg>
              2
            </span>

            <span>
              <svg
                role='img'
                aria-hidden='true'
                focusable='false'
                viewBox='0 0 10 16'
                height='16'
                width='10'
              >
                <path
                  fillRule='evenodd'
                  d='M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z'
                />
              </svg>
              0
            </span>
          </div>

          <div className='repo-card__stats--right'>
            <span>364 KB</span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default RepoCard;
