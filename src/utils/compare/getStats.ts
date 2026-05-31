export const getStats = (user) => ({
  stars: user.repos.reduce((acc, item) => acc + item.stargazers_count, 0),
  repos: user.repos.length,
  forks: user.forks_count,
  followers: user.profile.followers,
});
