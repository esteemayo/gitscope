import Avatar from '../dashboard/Avatar';
import RepoPreviewCard from './RepoPreviewCard';

import ProfileStatChip from './ProfileStatChip';
import ProfileLeaderBadge from './ProfileLeaderBadge';

import CalendarIcon from '../icons/CalendarIcon';
import MapPinIcon from '../icons/MapPinIcon';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';
import CompanyIcon from '../icons/CompanyIcon';

import { formatDate } from '@/utils/formatDate';
import { CompareProfileCardProps } from '@/types/compare/compare.profile.card.type';

import '../../styles/components/CompareProfileCard.scss';

const CompareProfileCard = ({
  user,
  repos,
  label,
  leaderBadge,
}: CompareProfileCardProps) => {
  const repositoriesUrl = `${user.html_url}?tab=repositories`;

  return (
    <div className='compare-profile-card'>
      <header className='compare-profile-card__header'>
        <span
          className={`compare-profile-card__label ${label === 'User A' ? 'labelA' : 'labelB'}`}
        >
          {label}
        </span>

        <Avatar
          imgSrc={user.avatar_url}
          name={user.name!}
          size={120}
          alt={user.login}
        />

        <h3 className='compare-profile-card__name'>
          {user.name || user.login}
        </h3>

        <a
          href={user.html_url}
          target='_blank'
          rel='noopener noreferrer'
          className='compare-profile-card__username'
        >
          @{user.login}
          <ExternalLinkIcon />
        </a>

        {(user.location || user.company || user.created_at) && (
          <div className='compare-profile-card__meta'>
            {user.location && (
              <span className='compare-profile-card__meta--item'>
                <MapPinIcon />
                {user.location}
              </span>
            )}

            {user.company && (
              <span className='compare-profile-card__meta--item'>
                <CompanyIcon />
                {user.company}
              </span>
            )}

            {user.created_at && (
              <span className='compare-profile-card__meta--item'>
                <CalendarIcon /> Joined {formatDate(user.created_at, true)}
              </span>
            )}
          </div>
        )}

        <div className='compare-profile-card__stats'>
          <ProfileStatChip label='Repositories' value={user.public_repos} />
          <ProfileStatChip label='Followers' value={user.followers} />
          <ProfileStatChip label='Following' value={user.following} />
        </div>

        {leaderBadge?.length && (
          <div className='compare-profile-card__badges'>
            {leaderBadge.map((badge) => (
              <ProfileLeaderBadge key={badge} variant={badge} />
            ))}
          </div>
        )}
      </header>

      <section className='compare-profile-card__section'>
        <div className='compare-profile-card__repos-header'>
          <h4 className='compare-profile-card__repos-title'>
            Top repositories
          </h4>

          <span className='compare-profile-card__repos-description'>
            Showing {Math.min(repos.length, 3)} of {repos.length}
          </span>
        </div>

        <div className='compare-profile-card__repos'>
          {repos.slice(0, 3).map((repo) => (
            <RepoPreviewCard key={repo.id} {...repo} />
          ))}
        </div>

        {repos.length > 3 && (
          <a
            href={repositoriesUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='compare-profile-card__repos-link'
          >
            View all repositories
            <ExternalLinkIcon />
          </a>
        )}
      </section>
    </div>
  );
};

export default CompareProfileCard;
