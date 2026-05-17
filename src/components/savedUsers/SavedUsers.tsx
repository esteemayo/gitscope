'use client';

import { useEffect, useState } from 'react';

import SavedCard from '../ui/SavedCard';

import { SavedUserType } from '@/types';
import { getSavedUsers } from '@/lib/storage';

import '../../styles/components/SavedUsers.scss';

const SavedUsers = () => {
  const [users, setUsers] = useState<SavedUserType[]>([]);

  const load = () => {
    setUsers(() => getSavedUsers());
  };

  useEffect(() => {
    load();

    window.addEventListener('saved:updated', load);
    return () => window.removeEventListener('saved:updated', load);
  }, []);

  // const data = getSavedUsers();
  // console.log(data)
  // console.log(users)

  return (
    <div className='saved-users'>
      <div className='saved-users__container'>
        <header className='saved-users__header'>
          <h2 className='saved-users__heading'>Saved profiles</h2>
        </header>

        {users.length === 0 ? (
          <div className='saved-users__empty'>
            <p>No saved profiles</p>
          </div>
        ) : (
          <div className='saved-users__grid'>
            {users?.map((user) => (
              <SavedCard key={user.username} {...user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedUsers;
