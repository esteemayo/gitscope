'use client';

import UserContentBoundary from './UserContentBoundary';
import { UserContentBoundariesProps } from '@/types/terms/userContent/user.content.boundaries.type';

import '../../../styles/components/terms/userContent/UserContentBoundaries.scss';

const UserContentBoundaries = ({ items }: UserContentBoundariesProps) => {
  return (
    <section
      className='user-content-boundaries'
      aria-labelledby='user-content-boundaries-title'
    >
      <div className='user-content-boundaries__header'>
        <span className='user-content-boundaries__header--label'>
          Content responsibilities
        </span>

        <h3
          id='user-content-boundaries-title'
          className='user-content-boundaries__header--title'
        >
          Before you provide content
        </h3>
      </div>

      <div className='user-content-boundaries__grid'>
        {items.map((item, index) => (
          <UserContentBoundary key={item.id} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default UserContentBoundaries;
