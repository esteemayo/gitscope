const TimelineIcon = () => {
  return (
    <svg
      role='img'
      aria-hidden='true'
      focusable='false'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
    >
      <circle cx='5' cy='16' r='1.5' fill='currentColor' />

      <circle cx='12' cy='9' r='1.5' fill='currentColor' />

      <circle cx='19' cy='6' r='1.5' fill='currentColor' />

      <path
        d='M5 16L12 9L19 6'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default TimelineIcon;
