import cn from 'classnames';
import { ReactNode } from 'react';
import s from './Button.module.scss';

interface IButtonProps {
  children?: ReactNode;
  color?: 'primary' | 'secondary' | 'outline';
  isWide?: boolean;
}

const Button = ({ children = '', color = 'primary', isWide = false }: IButtonProps) => {
  const styleButton = cn(s.button, s[color], { [s.isWide]: isWide });
  return <button className={styleButton}>{children}</button>;
};

export default Button;
