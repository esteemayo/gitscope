const ExternalLinkIcon = () => {
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
      <path
        d='M14 5H19V10'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />

      <path
        d='M10 14L19 5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />

      <path
        d='M19 14V18C19 18.53 18.79 19.04 18.41 19.41C18.04 19.79 17.53 20 17 20H6C5.47 20 4.96 19.79 4.59 19.41C4.21 19.04 4 18.53 4 18V7C4 6.47 4.21 5.96 4.59 5.59C4.96 5.21 5.47 5 6 5H10'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ExternalLinkIcon;
