import '../../styles/components/dashboard/Disclaimer.scss';

const Disclaimer = ({ text }: { text: string }) => {
  return <p className='disclaimer'>{text}</p>;
};

export default Disclaimer;
