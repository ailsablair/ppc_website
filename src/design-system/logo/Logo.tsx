import React from 'react';
import './logo.css';

export type LogoVariant =
  | 'black'
  | 'primary'
  | 'pink'
  | 'yellow'
  | 'blue-steel'
  | 'olive'
  | 'alt'
  | 'white';

export interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  'aria-label'?: string;
}

const LOGO_SOURCES: Record<LogoVariant, string> = {
  alt: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F515e31954f9648578cb134362bdf95bb?format=webp&width=800',
  black: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fd52faccfa3204ce48284fbc3bfe4bbbe?format=webp&width=800',
  'blue-steel': 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F6959b738544749849fced7ba63409207?format=webp&width=800',
  olive: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F6ccf90c8e2c64cd48142ad111d275233?format=webp&width=800',
  pink: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F3be93977b61b4e448250bdea9b397e51?format=webp&width=800',
  primary: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F1d41ff210bc04e14b7d31551acfaa705?format=webp&width=800',
  white: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F0f50be22611b478ab1dbe16b0f377e56?format=webp&width=800',
  yellow: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F0b4f09f1861d40d5a262ab87a1f42fd9?format=webp&width=800',
};

export const Logo: React.FC<LogoProps> = ({ variant = 'primary', className, 'aria-label': ariaLabel }) => {
  const src = LOGO_SOURCES[variant];
  const label = ariaLabel ?? 'Pipsqueak Pet Care logo';

  const classes = ['ppc-logo', `ppc-logo--${variant}`, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <img className="ppc-logo__image" src={src} alt={label} />
    </div>
  );
};
