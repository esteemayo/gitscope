import UserAvatar from '../ui/UserAvatar';
import { ContributorCardProps } from '@/types/repo/contributor.card.type';

import '../../styles/components/repo/ContributorCard.scss';

const ContributorCard = ({ contributor, rank }: ContributorCardProps) => {
  return (
    <article className='contributor-card'>
      <span className='contributor-card__rank'>#{rank}</span>

      <UserAvatar
        src={contributor.avatarUrl}
        name={contributor.login}
        alt={contributor.login}
        size={44}
      />

      <div className='contributor-card__content'>
        <strong className='contributor-card__content--name'>
          {contributor.login}
        </strong>

        <span className='contributor-card__content--commits'>
          {contributor.contributions} commits
        </span>
      </div>
    </article>
  );
};

export default ContributorCard;
