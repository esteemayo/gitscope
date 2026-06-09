import UserAvatar from '../ui/UserAvatar';
import { Contributor } from '@/types/repo';

import '../../styles/components/repo/ContributorCard.scss';

type ContributorCardProps = Contributor;

const ContributorCard = ({
  rank,
  login,
  avatarUrl,
  contributions,
}: ContributorCardProps) => {
  return (
    <article className='contributor-card'>
      <span className='contributor-card__rank'>#{rank}</span>

      <UserAvatar src={avatarUrl} name={login} alt={login} size={44} />

      <div className='contributor-card__content'>
        <strong className='contributor-card__content--name'>{login}</strong>

        <span className='contributor-card__content--commits'>
          {contributions} commits
        </span>
      </div>
    </article>
  );
};

export default ContributorCard;
