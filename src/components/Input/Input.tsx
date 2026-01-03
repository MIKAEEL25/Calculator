const Input = () => {
  return (
    <div className=" flex justify-evenly text-2xl w-1/4 m-auto items-center">
      <input
        id="input"
        name="input"
        type="text"
        className="bg-black border-2 rounded-3xl border-primary w-fit p-5 focus:border-primary focus:outline-none active:border-primary"
      />
      <span className="ml-4 mr-4">=</span>
      <label className="bg-black border-2 rounded-3xl border-secondary w-fit p-5"></label>
    </div>
  );
};

export default Input;
 