export const getConsistencyScore = (data: number[]) => {
  if (!data.length) return 0;

  const avg = data.reduce((a, b) => a + b, 0) / data.length;

  const variance =
    data.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / data.length;

  return Math.round(100 - Math.sqrt(variance));
};
