import { MAIN_BUTTONS, SCI_BUTTONS } from '@/utils/operators';
import Button from '../Button/Button';
import { evaluate } from 'mathjs';
import { useState } from 'react';
import type { PanelProps } from './Type';

const Panel: React.FC<PanelProps> = ({ onExpressionChange, finalResult }) => {
  const [expression, setExpression] = useState('');

  function buttonClickHandler(value: number | string) {
    try {
      if (value === 'AC') {
        setExpression('');
        finalResult('');
      } else if (value === 'C') {
        setExpression('');
      } else if (value === 'DEL') {
        setExpression((prev) => {
          if (prev.length === 0) return '';
          return prev.slice(0, -1);
        });
      } else if (value === '=') {
        const result = evaluate(expression);
        if (typeof result === 'boolean') {
          finalResult(result ? 'TRUE' : 'FALSE');
        } else {
          if (result > Number.MAX_SAFE_INTEGER) {
            finalResult(String(BigInt(result)));
          } else {
            finalResult(String(result));
          }
        }
      } else {
        setExpression((prev) => prev + value);
      }
    } catch (error) {
      if (error instanceof RangeError) {
        finalResult('INFINITY');
      }
    }
  }
  onExpressionChange(expression);
  return (
    <div className="flex justify-center-safe">
      <div className="grid grid-cols-10 gap-3 p-5 h-9/12 text-3xl text-blue-800">
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
