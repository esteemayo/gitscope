import { Code2, ShieldCheck, Sparkles } from 'lucide-react';

import {
  TeamFocusType,
  TeamMemberType,
  TeamVisualData,
} from '@/types/terms/aboutTeam';

export const aboutTeamVisual: TeamVisualData = {
  image: '/avatar-2.jpg',
  imageAlt: 'The GitScope team working together',
  eyebrow: 'The people behind GitScope',
  label: 'Built for developers',
  accentColor: '#8B5CF6',
};

export const aboutTeamFocusItems: TeamFocusType[] = [
  {
    id: 'developer-experience',
    title: 'Developer experience',
    description:
      'We focus on interfaces that help developers understand their GitHub activity without unnecessary complexity.',
    icon: Code2,
    accentColor: '#60A5FA',
  },
  {
    id: 'privacy',
    title: 'Privacy and trust',
    description:
      'We approach user data, authentication, and platform access with privacy and responsible data handling in mind.',
    icon: ShieldCheck,
    accentColor: '#34D399',
  },
  {
    id: 'continuous-improvement',
    title: 'Continuous improvement',
    description:
      'We listen, learn, iterate, and improve GitScope as developer needs and the platform continue to evolve.',
    icon: Sparkles,
    accentColor: '#F59E0B',
  },
];

export const aboutTeamMembers: TeamMemberType[] = [
  {
    id: 'emmanuel-adebayo',
    name: 'Emmanuel Adebayo',
    role: 'Creator & Full Stack Developer',
    description:
      'Building GitScope with a focus on modern frontend engineering, product design, accessibility, and scalable application architecture.',
    image: '/avatar-2.jpg',
    accentColor: '#A78BFA',
  },
];
