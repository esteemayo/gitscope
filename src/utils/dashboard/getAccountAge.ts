export const getAccountAge = (createdAt: string): number => {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);

  if (Number.isNaN(createdDate.getTime())) {
    return 0;
  }

  let years = currentDate.getFullYear() - createdDate.getFullYear();

  const anniversary = new Date(
    currentDate.getFullYear(),
    createdDate.getMonth(),
    createdDate.getDate(),
  );

  if (currentDate < anniversary) {
    years--;
  }

  return Math.max(0, years);
};
