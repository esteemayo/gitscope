import ProfileHeading from './ProfileHeading';
import ProfileMetaCard from './ProfileMetaCard';

import EnvelopeIcon from '../icons/EnvelopeIcon';
import TwitterX from '../icons/TwitterX';
import Building2Icon from '../icons/Building2Icon';
import MapPinIcon from '../icons/MapPinIcon';

import { GithubUser } from '@/types/profile';
import '../../styles/components/profile/ProfileMeta.scss';

interface ProfileMetaProps {
  user: GithubUser;
}

const ProfileMeta = ({ user }: ProfileMetaProps) => {
  const items = [
    {
      id: 'location',
      icon: MapPinIcon,
      label: 'Location',
      value: user.location ?? 'Not specified',
    },
    {
      id: 'company',
      icon: Building2Icon,
      label: 'Company',
      value: user.company ?? 'Independent',
    },
    {
      id: 'email',
      icon: EnvelopeIcon,
      label: 'Email address',
      value: user.email,
    },
    {
      id: 'twitter',
      icon: TwitterX,
      label: 'Twitter',
      value: user.twitter_username
        ? `@${user.twitter_username}`
        : 'Not specified',
    },
  ];

  return (
    <section className='profile-meta' aria-labelledby='profile-meta-title'>
      <div className='profile-meta__container'>
        <ProfileHeading
          id='profile-meta-title'
          title='Profile information'
          description='Personal information about you'
        />

        <div className='profile-meta__grid'>
          {items.map((item) => (
            <ProfileMetaCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileMeta;
