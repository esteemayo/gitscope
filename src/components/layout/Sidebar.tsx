import Link from 'next/link';
import XmarkIcon from '../icons/XmarkIcon';

import '../../styles/components/Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__overlay'>
        <div className='sidebar__container'>
          <ul className='sidebar__list'>
            <li className='sidebar__item'>
              <a
                href='https://github.com/esteemayo'
                className='sidebar__item--link'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </li>

            <li className='sidebar__item'>
              <Link href='/compare' className='sidebar__item--link'>
                Compare
              </Link>
            </li>
          </ul>

          <div className='sidebar__copyright'>
            <p className='sidebar__copyright--text'>
              &copy; {new Date().getFullYear()} GitScope, Inc. All rights reserved.
            </p>
          </div>

          <button type='button' className='sidebar__btn-close'>
            <XmarkIcon />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
