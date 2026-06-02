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
      <p className='popular-comparisons__title'>Popular Comparisons</p>

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
