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
  ariaLabel?: string;
  'aria-label'?: string;
}

const LOGO_SOURCES: Record<LogoVariant, string> = {
  alt: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fab90f7942eaa42e796658b92c6087914?format=webp&width=800',
  black: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Ffebf3cc6051d46d4a00f2ffcd8aaf650?format=webp&width=800',
  'blue-steel': 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F383feb0af4014ba6bfce23360e8d2e03?format=webp&width=800',
  olive: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F21a63631daa94815b8a27b19ba26bc95?format=webp&width=800',
  pink: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F5f197dbccf334f5ea49c75a9882b448c?format=webp&width=800',
  primary: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F5494b564c30446db9f9ab5046e3d87f5?format=webp&width=800',
  white: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F13c2829188704088a0b2678a8f17eef3?format=webp&width=800',
  yellow: 'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F8899909a55e4458c832741b5c4b8de0e?format=webp&width=800',
};

export const Logo: React.FC<LogoProps> = (props) => {
  const { variant = 'primary', className } = props;
  const ariaLabelProp = props.ariaLabel ?? props['aria-label'];

  const src = LOGO_SOURCES[variant] ?? LOGO_SOURCES.primary;
  const label = ariaLabelProp ?? 'Pipsqueak Pet Care logo';

  const classes = ['ppc-logo', `ppc-logo--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <img
        className="ppc-logo__image"
        src={src}
        alt={label}
        aria-label={ariaLabelProp}
      />
    </div>
  );
};

export default Logo;
