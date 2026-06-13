import { LanguageData } from '@/types/repo';
import '../../styles/components/repo/LanguageChartBar.scss';

interface LanguageChartBarProps {
  languages: LanguageData[];
}

const LanguageChartBar = ({ languages }: LanguageChartBarProps) => {
  return (
    <div className='language-chart-bar'>
      {languages.map((language) => {
        const { name, color, percentage } = language;

        return (
          <span
            key={name}
            style={{
              width: `${percentage}%`,
              backgroundColor: color,
            }}
          />
        );
      })}
    </div>
  );
};

export default LanguageChartBar;
