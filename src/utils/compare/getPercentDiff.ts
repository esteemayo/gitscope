export const getPercentDiff = (a: number, b: number) => {
  if (a === b) return '0%';

  const diff = Math.abs(a - b);
  const base = Math.min(a, b) || 1;

  return `${Math.round((diff / base) * 100)}%`;
};
