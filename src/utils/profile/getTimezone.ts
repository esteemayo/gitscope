export const getTimezone = (location?: string | null) => {
  if (!location) {
    return 'UTC + 1';
  }

  const zones: Record<string, string> = {
    Nigeria: 'Africa/Lagos',
    Ghana: 'Africa/Accra',
    Kenya: 'Africa/Nairobi',
    India: 'Asia/Kolkata',
    Japan: 'Asia/Tokyo',
    Canada: 'America/Toronto',
    Germany: 'Europe/Berlin',
    France: 'Europe/Paris',
    USA: 'America/New_York',
    UK: 'Europe/London',
  };

  const found = Object.entries(zones).find(([country]) =>
    location.includes(country),
  );

  return found?.[1] ?? 'UTC + 1';
};
