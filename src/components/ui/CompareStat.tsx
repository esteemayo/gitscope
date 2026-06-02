import UserAvatar from './UserAvatar';

// import { activityTimeline } from '@/utils/compare/getActivityTimeline';
// import { getStats } from '@/utils/compare/getStats';
// import { getMostActiveMonth } from '@/utils/compare/getMostActiveMonth';
import { compareValues } from '@/utils/compare/compareValues';
// import { getConsistencyScore } from '@/utils/compare/getConsistencyScore';

import { CompareStatProps } from '@/types/compare/compare.stat.type';
import '../../styles/components/CompareStat.scss';

const CompareStat = ({
  label,
  valueA,
  valueB,
  leftUser,
  rightUser,
}: CompareStatProps) => {
  if (!leftUser || !rightUser) return null;

  // const stat1 = getStats(leftUser);
  // const stat2 = getStats(rightUser);

  // const statWinner = {
  //   stars: stats1.stars > stats2.stars ? 'A' : 'B',
  //   repos: stats1.repos > stats2.repos ? 'A' : 'B',
  //   forks: stats1.forks > stats2.forks ? 'A' : 'B',
  //   followers: stats1.followers > stats2.followers ? 'A' : 'B',
  // };

  // const timelineA = activityTimeline(leftUser.repos);
  // const timelineB = activityTimeline(rightUser.repos);

  // const merged = timelineA.map((item, index) => ({
  //   date: item.date,
  //   userA: item.count,
  //   userB: timeline[index]?.count || 0,
  // }));

  // export const mergeTimeline = (a, b) => {
  //   const map = {}

  //   a.forEach((item) => {
  //     map[item.date] = { date: item.date, userA: item.count, userB: 0 };
  //   });

  //   b.forEach((item) => {
  //     if (!map[item.date]) {
  //       map[item.date] = { date: item.date, userA: 0, userB: item.count };
  //     } else {
  //       map[item.date].userB = item.count;
  //     }
  //   });

  //   return Object.values(map).sort((x, y) => x.date.localeCompare(y));
  // };

  // const mostA = getMostActiveMonth(timelineA);
  // const mostB = getMostActiveMonth(timelineB);

  // const consistencyA = getConsistencyScore(timelineA);
  // const consistencyB = getConsistencyScore(timelineB);

  const { winner, diff } = compareValues(valueA, valueB);

  const isWinner = winner === 'A';

  const total = valueA + valueB || 1;

  const aWidth = (valueA / total) * 100;
  const bWidth = (valueB / total) * 100;

  const winnerName = isWinner ? leftUser.login : rightUser.login;
  const avatarUrl = isWinner ? leftUser.avatar_url : rightUser.avatar_url;

  const profileName = isWinner ? leftUser.name : rightUser.name;

  return (
    <article
      className={isWinner ? 'compare-stat winnerA' : 'compare-stat winnerB'}
    >
      <p className='compare-stat__label'>{label}</p>
      <div className='compare-stat__values'>
        <strong
          className={
            isWinner
              ? 'compare-stat__values--value winnerA'
              : 'compare-stat__values--value'
          }
        >
          {valueA} {isWinner && '✓'}
        </strong>

        <span className='compare-stat__values--versus'>vs</span>

        <strong
          className={
            winner === 'B'
              ? 'compare-stat__values--value winnerB'
              : 'compare-stat__values--value'
          }
        >
          {valueB} {winner === 'B' && '✓'}
        </strong>
      </div>

      <div className='compare-stat__bar'>
        <div
          className='compare-stat__bar--fillA'
          style={{ width: `${aWidth}%` }}
        />

        <div
          className='compare-stat__bar--fillB'
          style={{ width: `${bWidth}%` }}
        />
      </div>

      <div className='compare-stat__legend'>
        <span className='compare-stat__legend--text'>
          <i className='compare-stat__legend--dotA' />
          {leftUser.login}
        </span>

        <span className='compare-stat__legend--text'>
          <i className='compare-stat__legend--dotB' />
          {rightUser.login}
        </span>
      </div>

      {winner !== 'tie' && (
        <div className='compare-stat__diff'>
          <div
            className={
              isWinner
                ? 'compare-stat__user winnerA'
                : 'compare-stat__user winnerB'
            }
          >
            <UserAvatar
              src={avatarUrl}
              name={profileName}
              size={26}
              alt={`${winnerName} avatar`}
            />

            <div className='compare-stat__content'>
              <span className='compare-stat__content--name'>{winnerName}</span>

              <span className='compare-stat__content--text'>
                leads by {diff}%
              </span>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default CompareStat;
