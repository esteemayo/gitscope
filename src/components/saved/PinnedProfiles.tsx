'use client';

import { Pin } from 'lucide-react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';

import SavedHeading from './SavedHeading';
import SavedProfileCard from './card/SavedProfileCard';

import { PinnedProfilesProps } from '@/types/saved/pinned.profiles.type';
import '../../styles/components/saved/PinnedProfiles.scss';

const PinnedProfiles = ({
  profiles,
  onReorder,
  onToggle,
  onDelete,
}: PinnedProfilesProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 6 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;

    const oldIndex = profiles.findIndex(
      (profile) => profile.id === Number(active.id),
    );

    const newIndex = profiles.findIndex(
      (profile) => profile.id === Number(over.id),
    );

    if (oldIndex === -1 || newIndex === -1) return;

    onReorder(arrayMove(profiles, oldIndex, newIndex));
  };

  return (
    <section className='pinned-profiles'>
      <div className='pinned-profiles__header'>
        <SavedHeading
          title='Pinned profiles'
          description='Quick access to your favorite GitHub profiles.'
          icon={Pin}
        />

        <span className='pinned-profiles__count'>{profiles.length}/4</span>
      </div>

      {profiles.length > 0 ? (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={profiles.map((profile) => profile.id)}
            strategy={rectSortingStrategy}
          >
            <div className='pinned-profiles__grid'>
              {profiles.slice(0, 4).map((profile) => (
                <SavedProfileCard
                  key={profile.id}
                  profile={profile}
                  onPin={onToggle}
                  onDelete={onDelete}
                  isDraggable={true}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      ) : (
        <div className='pinned-profiles__empty'>
          <Pin
            size={17}
            strokeWidth={1.8}
            role='img'
            aria-hidden='true'
            focusable='false'
          />

          <span className='pinned-profiles__empty--description'>
            Pin profiles to keep them at the top of your collection.
          </span>
        </div>
      )}
    </section>
  );
};

export default PinnedProfiles;
