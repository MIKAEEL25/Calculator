import type { JSX } from 'react';
import logo from '@/assets/logo.png';

const Header = (): JSX.Element => {
  return (
    <div className="flex justify-center-safe items-center w-10/12 m-auto mt-10">
      <img src={logo} alt="calculator image" className="w-1/12 h-1/12" />
      <h1 className="text-8xl text-emerald-200 font-mono drop-shadow-orange-500 drop-shadow-xl">
        Calculator
      </h1>
    </div>
  );
};

export default Header;
