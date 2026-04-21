type SpinnerSizeType = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type SpinnerVariantType = 'white' | 'blue' | 'light-blue';

export interface SpinnerProps {
  size?: SpinnerSizeType;
  variant?: SpinnerVariantType;
}
