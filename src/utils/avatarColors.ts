const colors = [
  '#2563eb',
  '#7c3aed',
  '#0891b2',
  '#16a34a',
  '#ea580c',
  '#db2777',
];

export const getAvatarColor = (seed: string = '') => {
  const total = seed
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return colors[total % colors.length];
};
