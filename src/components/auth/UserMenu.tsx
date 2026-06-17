'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, GitCompare, LogOut } from 'lucide-react';

import UserAvatar from '../ui/UserAvatar';

import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useClickOutside } from '@/hooks/useClickOutside';

import '../../styles/components/auth/UserMenu.scss';

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      staggerChildren: 0.05,
      delayChildren: 0.05,
    } as const,
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: {
      duration: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const UserMenu = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useClickOutside(menuRef, isOpen, handleClose);
  useEscapeKey({ isEnabled: isOpen, onEscape: handleClose });

  return (
    <div ref={menuRef} className='user-menu'>
      <div className='user-menu__container'>
        <button
          type='button'
          onClick={() => setIsOpen((prev) => !prev)}
          className='user-menu__trigger'
        >
          <UserAvatar name='esteemayo' size={36} alt='esteemayo' />

          <span className='user-menu__trigger--username'>esteemayo</span>

          <ChevronDown size={16} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={dropdownVariants}
              initial='hidden'
              animate='visible'
              className='user-menu__dropdown'
            >
              <motion.div variants={itemVariants} className='user-menu__info'>
                <h3 className='user-menu__info--heading'>Signed in as</h3>

                <strong className='user-menu__info--username'>esteemayo</strong>

                <span className='user-menu__info--email'>
                  eadebayo15@gmail.com
                </span>
              </motion.div>

              <div className='user-menu__item'>
                <motion.button
                  variants={itemVariants}
                  type='button'
                  className='user-menu__item--btn'
                >
                  <GitCompare size={16} />

                  <span>Compare profiles</span>
                </motion.button>

                <motion.button
                  variants={itemVariants}
                  type='button'
                  className='user-menu__item--btn'
                >
                  <LogOut size={16} />

                  <span>Sign out</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UserMenu;
