import type { InputProps } from './Types';

const Input: React.FC<InputProps> = ({ result, expression }) => {
  return (
    <div className="flex justify-center text-2xl w-1/4 items-center">
      <input
        id="input"
        name="input"
        type="text"
        disabled
        defaultValue={expression}
        className="bg-black border-2 rounded-3xl border-primary w-fit p-5 focus:border-primary focus:outline-none active:border-primary"
      />
      <span className="ml-4 mr-4">=</span>
      <label className="bg-black border-2 rounded-3xl border-secondary w-fit p-5">
        {result}
      </label>
    </div>
  );
};

export default Input;
