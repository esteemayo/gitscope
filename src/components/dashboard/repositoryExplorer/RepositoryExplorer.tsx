'use client';

import { RepositoryItem } from '@/types/repository.type';

import '../../../styles/components/dashboard/repositoryExplorer/RepositoryExplorer.scss';

const MOCK_REPOSITORIES: RepositoryItem[] = [
  {
    id: 1,
    name: 'overlay-hub',
    description:
      'Accessible popup architecture with reusable modal and drawer primitives for modern React applications.',
    language: 'TypeScript',
    accentColor: '#3178C6',
    stars: 42,
    forks: 8,
    updatedAt: '3 days ago',
    topics: ['react', 'accessibility', 'nextjs'],
  },
  {
    id: 2,
    name: 'gitscope',
    description:
      'A GitHub analytics platform for exploring developer profiles, repository insights, and contribution activity.',
    language: 'TypeScript',
    accentColor: '#3178C6',
    stars: 18,
    forks: 4,
    updatedAt: 'Yesterday',
    topics: ['github-api', 'analytics', 'nextjs'],
  },
  {
    id: 3,
    name: 'dev-store',
    description:
      'A modern e-commerce application with reusable product components and a structured backend API.',
    language: 'JavaScript',
    accentColor: '#F1E05A',
    stars: 12,
    forks: 3,
    updatedAt: '1 week ago',
    topics: ['ecommerce', 'express', 'zustand'],
  },
  {
    id: 4,
    name: 'blog-platform',
    description:
      'A full-stack publishing platform featuring authentication, rich text editing, and content discovery.',
    language: 'TypeScript',
    accentColor: '#3178C6',
    stars: 9,
    forks: 2,
    updatedAt: '2 weeks ago',
    topics: ['mongodb', 'express', 'blog'],
  },
  {
    id: 5,
    name: 'api-starter',
    description:
      'A lightweight REST API starter with structured error handling and database integration.',
    language: 'JavaScript',
    accentColor: '#F1E05A',
    stars: 6,
    forks: 1,
    updatedAt: '3 weeks ago',
    topics: ['nodejs', 'rest-api'],
    archived: true,
  },
  {
    id: 6,
    name: 'chat-app',
    description:
      'A real-time messaging application exploring event-driven communication and persistent chat history.',
    language: 'TypeScript',
    accentColor: '#3178C6',
    stars: 4,
    forks: 0,
    updatedAt: '1 month ago',
    topics: ['socketio', 'mongodb', 'realtime'],
  },
];

const RepositoryExplorer = () => {
  return (
    <section className='repository-explorer'>
      <div className='repository-explorer__'>RepositoryExplorer</div>
    </section>
  );
};

export default RepositoryExplorer;
