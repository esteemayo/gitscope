import SectionHeader from '../ui/SectionHeader';
import CompareStat from '../ui/CompareStat';
import CompareStatsIcon from '../icons/CompareStatsIcon';

import '../../styles/components/CompareOverview.scss';

const CompareOverview = () => {
  return (
    <section className='compare-overview'>
      <div className='compare-overview__container'>
        <SectionHeader
          icon={<CompareStatsIcon />}
          title='Compare overview'
          description='Key GitHub metrics side-by-side'
        />

        <div className='compare-overview__widgets'>
          <CompareStat
            label='Stars'
            valueA={120}
            valueB={80}
            leftUser={{
              name: 'The Octocat',
              login: 'octocat',
              avatar_url: 'https://github.com/octocat.png',
            }}
            rightUser={{ name: 'Brittany Chiang', login: 'brittany' }}
          />

          <CompareStat
            label='Repositories'
            valueA={50}
            valueB={70}
            leftUser={{
              name: 'The Octocat',
              login: 'octocat',
              avatar_url: 'https://github.com/octocat.png',
            }}
            rightUser={{ name: 'Brittany Chiang', login: 'brittany' }}
          />

          <CompareStat
            label='Forks'
            valueA={30}
            valueB={20}
            leftUser={{
              name: 'The Octocat',
              login: 'octocat',
              avatar_url: 'https://github.com/octocat.png',
            }}
            rightUser={{ name: 'Brittany Chiang', login: 'brittany' }}
          />

          <CompareStat
            label='Followers'
            valueA={80}
            valueB={210}
            leftUser={{
              name: 'The Octocat',
              login: 'octocat',
              avatar_url: 'https://github.com/octocat.png',
            }}
            rightUser={{ name: 'Brittany Chiang', login: 'brittany' }}
          />
        </div>
      </div>
    </section>
  );
};

export default CompareOverview;
