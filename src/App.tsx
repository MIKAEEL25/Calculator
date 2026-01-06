import { Header, Input, Panel } from '@/components';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState<string>();
  const [expression, setExpression] = useState('');

  function onExpressionChange(expression: string) {
    setExpression(expression);
  }

  function finalResult(result: string) {
    setResult(result);
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
