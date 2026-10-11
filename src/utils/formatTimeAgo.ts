import { formatDistanceToNowStrict, isValid, parseISO } from 'date-fns';

export const formatTimeAgo = (
  date: string | Date | null | undefined,
): string => {
  if (!date) return 'Unknown';

  const parsedDate = typeof date === 'string' ? parseISO(date) : date;

  if (!isValid(parsedDate)) return 'Unknown';

  return formatDistanceToNowStrict(date, {
    addSuffix: true,
  });
};
