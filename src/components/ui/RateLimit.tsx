import '../../styles/components/RateLimit.scss';

const RateLimit = () => {
  return (
    <div className='rate-limit'>
      <div className='rate-limit__container'>
        <span className='rate-limit__container--num'>60 / 60</span>

        <p className='rate-limit__container--text'>Requests left</p>
      </div>
    </div>
  );
};

export default RateLimit;
