import React from 'react';
import { Icons, type IconSize, type IconColour } from '../design-system/icons/Icons';
import './button.css';

export type ButtonVariant = 'default' | 'secondary' | 'ghost' | 'tertiary';
export type ButtonFill = 'default' | 'alt';
export type ButtonSize = 'large' | 'default' | 'small';
export type ButtonState = 'default' | 'hover' | 'focus' | 'disabled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fill?: ButtonFill;
  size?: ButtonSize;
  state?: ButtonState;
  showIcon?: boolean;
  iconColour?: IconColour;
  label?: string;
}

const sizeToIconSize: Record<ButtonSize, IconSize> = {
  large: 'lg-24px',
  default: 'default-20px',
  small: 'sm-16px',
};

const getDefaultIconColour = (
  variant: ButtonVariant,
  fill: ButtonFill,
): IconColour => {
  if (variant === 'secondary') {
    return fill === 'alt' ? 'yellow' : 'black';
  }

  if (variant === 'tertiary') {
    return fill === 'default' ? 'white' : 'black';
  }

  if (variant === 'ghost') {
    return 'black';
  }

  return fill === 'default' ? 'white' : 'black';
};

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'default',
    fill = 'default',
    size = 'large',
    state = 'default',
    showIcon = true,
    iconColour,
    label = 'Book a stay',
    className,
    disabled,
    type = 'button',
    children,
    ...rest
  } = props;

  const effectiveState: ButtonState = disabled ? 'disabled' : state;

  const classes = [
    'ppc-button',
    `ppc-button--type-${variant}`,
    `ppc-button--fill-${fill}`,
    `ppc-button--size-${size}`,
    `ppc-button--state-${effectiveState}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const iconSize: IconSize = sizeToIconSize[size];
  const computedIconColour: IconColour = iconColour ?? getDefaultIconColour(variant, fill);

  return (
    <button
      type={type}
      className={classes}
      disabled={effectiveState === 'disabled'}
      {...rest}
    >
      {showIcon && (
        <span className="ppc-button__icon">
          <Icons
            type="calendar"
            size={iconSize}
            filled
            colour={computedIconColour}
            aria-label={undefined}
          />
        </span>
      )}
      <span className="ppc-button__label">{children ?? label}</span>
    </button>
  );
};

export default Button;
