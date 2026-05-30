const DefaultAvatarIcon = ({ size = 20 }: { size?: number }) => {
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
      width={size}
      height={size}
      className='default-avatar-icon'
    >
      <circle cx='12' cy='12' r='12' fill='currentColor' opacity='0.12' />
      <circle cx='12' cy='9' r='3.5' fill='currentColor' />
      <path d='M6 18c1.5-2.5 4-4 6-4s4.5 1.5 6 4' fill='currentColor' />
    </svg>
  );
};

export default DefaultAvatarIcon;
