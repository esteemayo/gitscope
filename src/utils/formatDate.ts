const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export const formatDate = (date: Date | string) => {
  return DATE_FORMATTER.format(new Date(date));
};
