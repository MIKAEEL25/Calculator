import type { ButtonProps } from './Types';

const Button: React.FC<ButtonProps> = ({ bg, lable , value ,  onClick }) => {
  return <button onClick={() => onClick(value)} className={`button ${bg}`}>{lable}</button>;
};

export default Button;
