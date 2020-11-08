import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

export enum ButtonSize {
  base,
  small,
}

interface ButtonProps {
  yellow?: boolean;
  fullWidth?: boolean;
  size?: ButtonSize;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  yellow = false,
  size = ButtonSize.base,
  fullWidth = false,
}) => {
  return (
    <button
      type="button"
      className={cn(s.root, {
        [s.yellow]: yellow,
        [s.small]: size === ButtonSize.small,
        [s.fullWidth]: fullWidth,
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
