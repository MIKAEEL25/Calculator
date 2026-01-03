import type { ButtonProps } from './Types';

const Button: React.FC<ButtonProps> = ({ bg, lable }) => {
  return <button className={`button ${bg} ${bg ? bg : 'border-2 border-primary'}`}>{lable}</button>;
};

export default Button;
