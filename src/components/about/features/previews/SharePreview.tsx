import ActionCard from './ActionCard';
import { SharePreviewProps } from '@/types/about/features/previews/share.preview.type';

import '../../../../styles/components/about/features/previews/SharePreview.scss';

const SharePreview = ({
  icon,
  title,
  subtitle,
  accentColor,
  buttonLabel,
}: SharePreviewProps) => {
  return (
    <ActionCard
      icon={icon}
      title={title}
      subtitle={subtitle}
      accentColor={accentColor}
      buttonLabel={buttonLabel}
    />
  );
};

export default SharePreview;
