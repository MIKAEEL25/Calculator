import { OPERATORS } from '@/utils/operators';
import Button from '../Button/Button';
import { evaluate } from 'mathjs';
import { useState } from 'react';
import type { PanelProps } from './Type';

const Panel: React.FC<PanelProps> = ({ onExpressionChange, finalResult }) => {
  const [expression, setExpression] = useState('');

  function buttonClickHandler(value: number | string) {
    if (value === 'AC') {
      setExpression('');
      finalResult('');
    } else if (value === 'C') {
      setExpression('');
    } else if (value === '=') {
      const output = evaluate(expression);
      finalResult(String(output));
    } else {
      setExpression((prev) => prev + value);
    }
  }
  onExpressionChange(expression);
  return (
    <div className="grid grid-cols-4 gap-3 p-5 w-1/2 h-9/12 text-5xl">
      {OPERATORS.map((item) => (
        <Button
          key={item.label}
          bg={item.bg}
          lable={item.label}
          onClick={buttonClickHandler}
        />
      ))}
    </div>
  );
};

export default Panel;
