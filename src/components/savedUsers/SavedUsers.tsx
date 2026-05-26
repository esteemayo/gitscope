'use client';

import type { DragEndEvent } from '@dnd-kit/core';
import { motion } from 'framer-motion';
import { closestCenter, DndContext } from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import SavedCard from '../ui/SavedCard';
import EmptyState from '../ui/EmptyState';

import { SavedUserType } from '@/types';
import { getSavedUsers, saveAllUsers } from '@/lib/storage';

import '../../styles/components/SavedUsers.scss';

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const SavedUsers = () => {
  const [users, setUsers] = useState<SavedUserType[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = users.findIndex((user) => user.username === active.id);

    const newIndex = users.findIndex((user) => user.username === over.id);

    const reordered = arrayMove(users, oldIndex, newIndex);

    setUsers(reordered);
    saveAllUsers(reordered);
  };

  const load = () => {
    const frame = requestAnimationFrame(() => {
      setUsers(() => getSavedUsers());
    });

    return () => cancelAnimationFrame(frame);
  };

  useEffect(() => {
    load();

    window.addEventListener('saved:updated', load);
    return () => window.removeEventListener('saved:updated', load);
  }, []);

  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
      exit='initial'
      className='saved-users'
    >
      <div className='saved-users__container'>
        <header className='saved-users__header'>
          <h2 className='saved-users__heading'>Saved profiles</h2>
        </header>

        {users.length === 0 ? (
          <EmptyState
            title='No saved profiles.'
            subtitle='You have not saved any profile yet.'
          />
        ) : (
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={users.map((user) => user.username)}
              strategy={verticalListSortingStrategy}
            >
              <div className='saved-users__grid'>
                {users?.map((user) => (
                  <SavedCard key={user.username} {...user} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </div>
    </motion.div>
  );
};

export default SavedUsers;
