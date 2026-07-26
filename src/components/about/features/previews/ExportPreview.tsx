import ActionCard from './ActionCard';
import { ExportPreviewProps } from '@/types/about/features/previews/export.preview.type';

const ExportPreview = ({
  icon,
  title,
  subtitle,
  accentColor,
  buttonLabel,
}: ExportPreviewProps) => {
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

export default ExportPreview;
