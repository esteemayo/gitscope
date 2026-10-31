export const getAccountAge = (createdAt: string): string => {
  const created = new Date(createdAt).getTime();

  if (!Number.isFinite(created)) {
    return 'Unknown';
  }

  const years = Math.max((Date.now() - created) / (365.2425 * 86_400_000));

  return years < 1
    ? 'Under 1 year'
    : `${years} ${years === 1 ? 'year' : 'years'}`;
};
