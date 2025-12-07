import React from 'react';
import './logomark.css';

export type LogomarkVariant =
  | 'default'
  | 'white'
  | 'pink'
  | 'yellow'
  | 'blue-steel'
  | 'olive';

export interface LogomarkProps {
  variant?: LogomarkVariant;
  className?: string;
  ariaLabel?: string;
  'aria-label'?: string;
}

const LOGOMARK_SOURCES: Record<LogomarkVariant, string> = {
  default:
    'https://api.builder.io/api/v1/image/assets/TEMP/c5de0ecfce493bc3b5a57aa34281d4ade662b7c7?width=480',
  white:
    'https://api.builder.io/api/v1/image/assets/TEMP/8797d1f119d34717f8dc0f3915a448844b935a66?width=480',
  pink:
    'https://api.builder.io/api/v1/image/assets/TEMP/d7a63512e69aa0332a0121bafbfae43b7412edbd?width=480',
  yellow:
    'https://api.builder.io/api/v1/image/assets/TEMP/1a6142a0985baa979f30b4f53e1880b49d458653?width=480',
  'blue-steel':
    'https://api.builder.io/api/v1/image/assets/TEMP/b89aad1357fa86e9ea16407159ea8ac354ace311?width=480',
  olive:
    'https://api.builder.io/api/v1/image/assets/TEMP/37e42124166220dd50f8780e2b3c3a3835c93a75?width=480',
};

export const Logomark: React.FC<LogomarkProps> = (props) => {
  const { variant = 'default', className } = props;
  const ariaLabelProp = props.ariaLabel ?? props['aria-label'];

  const src = LOGOMARK_SOURCES[variant] ?? LOGOMARK_SOURCES.default;
  const label = ariaLabelProp ?? 'Pipsqueak Pet Care logomark';

  const classes = ['ppc-logomark', `ppc-logomark--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <img
        className="ppc-logomark__image"
        src={src}
        alt={label}
        aria-label={ariaLabelProp}
      />
    </div>
  );
};

export default Logomark;
