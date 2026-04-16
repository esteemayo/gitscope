import Avatar from './Avatar';
import ProfileStatsCard from './ProfileStatsCard';

import Calendar from '../icons/Calendar';
import MapPin from '../icons/MapPin';

import '../../styles/components/ProfileHeader.scss';

const ProfileHeader = () => {
  return (
    <section className='profile-header'>
      <div className='profile-header__container'>
        <Avatar />

        <h1 className='profile-header__name'>Emmanuel Adebayo</h1>

        <h2 className='profile-header__username'>
          <a
            href='https://github.com/esteemayo'
            target='_blank'
            rel='noopener noreferrer'
          >
            @esteemayo
          </a>
        </h2>

        <p className='profile-header__bio'>
          Full Stack Web Developer → MERN | MEVN | GraphQL | NextJS | React Native | TypeScript
        </p>

        <div className='profile-header__info'>
          <span className='profile-header__info--item'>
            <MapPin />
            Lagos, Nigeria
          </span>

          <span className='profile-header__info--item'>
            <Calendar />
            Joined July 25, 2019
          </span>
        </div>

        <div className='profile-header__stats'>
          <ProfileStatsCard value={200} label='Repositories' />
          <ProfileStatsCard value={14} label='Followers' />
          <ProfileStatsCard value={45} label='Following' />
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
