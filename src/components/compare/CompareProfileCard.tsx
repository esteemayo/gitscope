import ProfileStatChip from './ProfileStatChip';
import Avatar from '../dashboard/Avatar';
import RepoPreviewCard from './RepoPreviewCard';

import CompanyIcon from '../icons/CompanyIcon';
import MapPinIcon from '../icons/MapPinIcon';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';

import { CompareProfileCardProps } from '@/types/compare/compare.profile.card.type';
import '../../styles/components/CompareProfileCard.scss';

const CompareProfileCard = ({
  user,
  repos,
  label,
}: CompareProfileCardProps) => {
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
        </div>

        <div className='compare-profile-card__stats'>
          <ProfileStatChip label='Repositories' value={user.public_repos} />
          <ProfileStatChip label='Followers' value={user.followers} />
          <ProfileStatChip label='Following' value={user.following} />
        </div>
      </header>

      <footer className='compare-profile-card__repos'>
        <div className='compare-profile-card__repos-header'>
          <h4 className='compare-profile-card__repos-header--title'>
            Top repositories
          </h4>

          <span className='compare-profile-card__repos-header--description'>
            Showing {Math.min(repos.length, 3)} of {repos.length}
          </span>
        </div>

        {repos.slice(0, 3).map((repo) => (
          <RepoPreviewCard key={repo.id} {...repo} />
        ))}
      </footer>

      <a
        href={`${user.html_url}?tab=repositories`}
        target='_blank'
        rel='noopener noreferrer'
        className='compare-profile-card__repos-link'
      >
        View all repositories
        <ExternalLinkIcon />
      </a>
    </div>
  );
};

export default CompareProfileCard;
