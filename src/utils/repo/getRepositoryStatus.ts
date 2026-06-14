export const getRepositoryStatus = ({
  archived,
  disabled,
  updatedAt,
}: {
  archived: boolean;
  disabled: boolean;
  updatedAt: string;
}) => {
  if (disabled) {
    return 'Disabled';
  }

  if (archived) {
    return 'Archived';
  }

  const lastUpdate = new Date(updatedAt);

  const diffDays = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);

  if (diffDays > 365) {
    return 'Inactive';
  }

  return 'Active';
};
