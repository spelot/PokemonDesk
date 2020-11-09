import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

export enum ButtonSize {
  base,
  small,
}

export enum ButtonColor {
  yellow,
  green,
}

interface ButtonProps {
  color?: ButtonColor;
  fullWidth?: boolean;
  size?: ButtonSize;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = ButtonColor.green,
  size = ButtonSize.base,
  fullWidth = false,
}) => {
  return (
    <button
      type="button"
      className={cn(s.root, {
        [s.colorYellow]: color === ButtonColor.yellow,
        [s.small]: size === ButtonSize.small,
        [s.fullWidth]: fullWidth,
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
