const DATE_FORMATTER_LONG = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const DATE_FORMATTER_SHORT = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
});

export const formatDate = (date: Date | string, month?: boolean) => {
  const FORMATTER = month ? DATE_FORMATTER_SHORT : DATE_FORMATTER_LONG;
  return FORMATTER.format(new Date(date));
};
