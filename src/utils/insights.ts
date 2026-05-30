export const getMostActiveMonth = (data: number[]) => {
  const max = Math.max(...data);
  const index = data.indexOf(max);

  return {
    index,
    value: max,
  };
};

export const getConsistencyScore = (data: number[]) => {
  const avg = data.reduce((a, b) => a + b, 0) / data.length;

  const variance =
    data.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / data.length;

  return Math.round(100 - Math.sqrt(variance));
};
