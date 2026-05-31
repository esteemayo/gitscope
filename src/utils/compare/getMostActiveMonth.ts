export const getMostActiveMonth = (data: number[]) => {
  if (!data.length) return null;

  const max = Math.max(...data);
  const index = data.indexOf(max);

  return {
    index,
    value: max,
  };
};


