import { GitHubRepository } from '@/types/dashboard';

export const exportRepositoriesCSV = (repositories: GitHubRepository[]) => {
  if (!repositories.length) return;

  const headers = [
    'Repository Name',
    'Description',
    'Language',
    'Stars',
    'Forks',
    'Topics',
    'Updated At',
    'Archived',
    'Repository URL',
  ];

  const escapeCSV = (value: unknown): string => {
    let stringValue = String(value ?? '');

    if (/^[\t\r\n ]*[=+\-@]/.test(stringValue)) {
      stringValue = `'${stringValue}`;
    }

    return `"${stringValue.replace(/"/g, '""')}"`;
  };

  const rows = repositories.map((repository) => [
    repository.name,
    repository.description,
    repository.language,
    repository.stargazers_count,
    repository.fork,
    repository.topics.join(', '),
    repository.updated_at,
    repository.archived ? 'Yes' : 'No',
    repository.html_url,
  ]);

  const csvContent = [
    headers.map(escapeCSV).join(','),
    ...rows.map((row) => row.map(escapeCSV).join(',')),
  ].join('\r\n');

  const blob = new Blob(['\uFEFF', csvContent], {
    type: 'text/csv;charset=utf-8;',
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');

  link.href = url;
  link.download = `gitscope-repositories-${new Date()
    .toISOString()
    .slice(0, 10)}.csv`;

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
};
