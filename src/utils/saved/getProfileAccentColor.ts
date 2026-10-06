export const getProfileAccentColor = (userId: number) => {
  const colors = [
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
    '#2563EB',
    '#7c3AED',
    '#0891B2',
    '#16A34A',
    '#EA580C',
    '#DB2777',
  ];

  return colors[userId % colors.length];
};
