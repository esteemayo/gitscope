import { GitHubUserPreview } from '@/types/compare';

export const userProfileA: GitHubUserPreview = {
  name: 'The Octocat',
  login: 'octocat',
  avatar_url: 'https://github.com/octocat.png',
  location: 'San Francisco',
  company: 'SwiftPay',
  html_url: 'https://github.com/esteemayo',
  followers: 1200,
  following: 180,
  public_repos: 3000,
  created_at: '2011-01-25T18:44:36Z',
};

export const userProfileB: GitHubUserPreview = {
  name: 'Brittany Chiang',
  login: 'brittany',
  location: 'United States of America',
  company: 'Apple Inc.',
  html_url: 'https://github.com/brittany',
  followers: 5000,
  following: 400,
  public_repos: 2000,
  created_at: '2010-05-29T15:34:58Z',
};
