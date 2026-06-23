import {
  BuildingIcon,
  CalendarIcon,
  LocateIcon,
  Mail,
  XIcon,
} from 'lucide-react';

import { GithubUser } from '@/types/profile';
import { formatDate } from '@/utils/formatDate';

import '../../styles/components/profile/ProfileMeta.scss';

interface ProfileMetaProps {
  user: GithubUser;
}

const ProfileMeta = ({ user }: ProfileMetaProps) => {
  const items = [
    {
      id: 'location',
      icon: LocateIcon,
      label: 'Location',
      value: user.location ?? 'Not specified',
    },
    {
      id: 'company',
      icon: BuildingIcon,
      label: 'Company',
      value: user.company ?? 'Independent',
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Email address',
      value: user.email,
    },
    {
      id: 'twitter',
      icon: XIcon,
      label: 'Twitter',
      value: user.twitter_username
        ? `@${user.twitter_username}`
        : 'Not specified',
    },
    {
      id: 'joined',
      icon: CalendarIcon,
      label: 'Joined GitHub',
      value: formatDate(user.created_at, true),
    },
  ];

  return (
    <section className='profile-meta' aria-labelledby='profile-meta-title'>
      <div className='profile-meta__container'>
        <h2 id='profile-meta-title' className='profile-meta__title'>
          Profile information
        </h2>

        <div className='profile-meta__grid'>
          {items.map((item) => {
            const { id, icon: Icon, label, value } = item;

            return (
              <article
                key={id}
                className='profile-meta__card'
                aria-label={`${label}: ${value}`}
              >
                <div className='profile-meta__icon'>
                  <Icon size={20} />
                </div>

                <div className='profile-meta__content'>
                  <span className='profile-meta__label'>{label}</span>

                  <strong className='profile-meta__value'>{value}</strong>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfileMeta;
