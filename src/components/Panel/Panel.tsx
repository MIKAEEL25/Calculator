import { MAIN_BUTTONS, SCI_BUTTONS } from '@/utils/operators';
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
    <div className="flex justify-center-safe">
      <div className="grid grid-cols-5 gap-3 p-5 h-9/12 text-3xl">
        {SCI_BUTTONS.map((btn) => (
          <Button
            key={btn.label}
            bg={btn.bg}
            lable={btn.label}
            value={btn.value}
            onClick={buttonClickHandler}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-3 p-5 h-9/12 text-4xl">
        {MAIN_BUTTONS.map((btn) => (
          <Button
            key={btn.label}
            bg={btn.bg}
            lable={btn.label}
            value={btn.value}
            onClick={buttonClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Panel;
