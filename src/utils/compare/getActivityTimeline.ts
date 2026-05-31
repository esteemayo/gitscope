export const activityTimeline = (repos) => {
  const map = {};

  repos.forEach((repo) => {
    const date = new Date(repo.updated_at);
    const key = `${date.getFullYear()}-${date.getMonth() + 1}`;

    map[key] = (map[key] || 0) + 1;
  });

  return Object.entries(map).map(([date, count]) => ({
    date,
    count,
  }));
};
