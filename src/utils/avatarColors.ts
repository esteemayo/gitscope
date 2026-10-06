const colors = [
  '#2563EB',
  '#7c3AED',
  '#0891B2',
  '#16A34A',
  '#EA580C',
  '#DB2777',
  '#61DAFB',
  '#F05032',
  '#22C55E',
  '#F59E0B',
  '#8B5CF6',
  '#EF4444',
  '#06B6D4',
  '#A855F7',
  '#EC4899',
  '#3B82F6',
  '#14B8A6',
  '#F97316',
];

export const getAvatarColor = (seed: string = '') => {
  const total = seed
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return colors[total % colors.length];
};
