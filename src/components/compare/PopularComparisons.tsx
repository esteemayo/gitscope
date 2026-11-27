import '../../styles/components/PopularComparisons.scss';

interface PopularComparisonsProps {
  onSelect(userA: string, userB: string): void;
}

const presets = [
  ['torvalds', 'gaearon'],
  ['sinderesorhus', 'antfu'],
  ['vercel', 'netlify'],
];

const PopularComparisons = ({ onSelect }: PopularComparisonsProps) => {
  return (
    <div className='popular-comparisons'>
      <div className='popular-comparisons__heading'>
        <h3 className='popular-comparisons__heading--title'>
          Popular Comparisons
        </h3>

        <span className='popular-comparisons__heading--hint'>
          Try a suggested comparison
        </span>
      </div>

      <div className='popular-comparisons__list'>
        {presets.map(([userA, userB]) => (
          <button
            key={`${userA}-${userB}`}
            type='button'
            onClick={() => onSelect(userA, userB)}
            className='popular-comparisons__list--btn'
          >
            {userA} vs {userB}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularComparisons;
