import type { ButtonProps } from './Types';

const Button: React.FC<ButtonProps> = ({ bg, lable , value ,  onClick }) => {
  return <button onClick={() => onClick(value)} className={`button ${bg} ${bg ? bg : 'border-2 border-primary'}`}>{lable}</button>;
};

export default Button;
