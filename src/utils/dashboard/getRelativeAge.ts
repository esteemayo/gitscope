export const getRelativeAge = (date: string): string => {
  const timestamp = new Date(date).getTime();

  if (!Number.isFinite(timestamp)) {
    return 'Unknown';
  }

  const days = Math.max(0, Math.floor((Date.now() - timestamp) / 86_400_000));

  if (days < 30) {
    return days === 0 ? 'Today' : `${days} days ago`;
  }

  const years = Math.floor(days / 365);

  return `${years} ${years === 1 ? 'year' : 'years'} ago`;
};
