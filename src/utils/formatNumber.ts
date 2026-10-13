export const formatNumber = (value: number): string => {
  const NUMBER_FORMATTER = new Intl.NumberFormat('en', {
    notation: value > 10_000 ? 'compact' : 'standard',
    maximumFractionDigits: 1,
  });

  return NUMBER_FORMATTER.format(value);
};
