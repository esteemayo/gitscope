import { FactProps } from '@/types/repo/fact.type';
import '../../styles/components/repo/Fact.scss';

const Fact = ({ label, value }: FactProps) => {
  return (
    <article className='fact'>
      <span className='fact__label'>{label}</span>

      <strong className='fact__value'>{value}</strong>
    </article>
  );
};

export default Fact;
