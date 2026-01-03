import { OPERATORS } from '@/utils/operators';
import Button from '../Button/Button';

const Panel = () => {
  return (
    <div className='grid grid-cols-4 gap-3 p-5 w-1/2 h-9/12 text-5xl border-2 border-secondary rounded-4xl'>
      {OPERATORS.map((item) => (
        <Button bg={item.bg} lable={item.label} />
      ))}
    </div>
  );
};

export default Panel;
