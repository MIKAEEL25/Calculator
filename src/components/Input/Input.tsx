import type { InputProps } from './Types';

const Input: React.FC<InputProps> = ({ result, expression }) => {
  return (
    <div className="flex justify-center text-2xl w-full items-center">
      <input
        id="input"
        name="input"
        type="text"
        readOnly
        defaultValue={expression}
        className="bg-black border-2 rounded-3xl border-primary w-8/12 p-5 focus:border-purple-500 focus:outline-none active:border-purple-500"
      />
      <span className="ml-4 mr-4">=</span>
      <label className="bg-black border-2 rounded-3xl border-secondary w-fit p-5">
        {result}
      </label>
    </div>
  );
};

export default Input;
