import { Header, Input, Panel } from '@/components';
import { evaluate } from 'mathjs';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState<number>();
  const [expression, setExpression] = useState('');

  function onExpressionChange(expression: string) {
    setExpression(expression);
  }

  function finalResult(result: string) {
    const output = evaluate(result);
    setResult(output);
  }
  return (
    <>
      <Header />
      <div className="flex w-full flex-col mt-30 items-center m-auto">
        <Input result={result} expression={expression} />
        <Panel
          onExpressionChange={onExpressionChange}
          finalResult={finalResult}
        />
      </div>
    </>
  );
}

export default App;
