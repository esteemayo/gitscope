export const compareValues = (a: number, b: number) => {
  if (a === b) {
    return { winner: 'tie', diff: 0 };
  }

  const winner = a > b ? 'A' : 'B';
  const diff = Math.abs(((a - b) / Math.max(a, b)) * 100);

  return {
    winner,
    diff: Math.round(diff),
  };
};
