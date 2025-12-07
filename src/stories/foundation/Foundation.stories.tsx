import type { Meta } from '@storybook/react';
import './colors.css';

const meta = {
  title: 'Foundation',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

interface ColorToken {
  name: string;
  hex: string;
  variable: string;
}

const primaryColors: ColorToken[] = [
  { name: 'Red', hex: '#FF2D46', variable: '--color-red' },
  { name: 'Primary Pink', hex: '#E34A6F', variable: '--color-primary-pink' },
  { name: 'Blue Steel', hex: '#383E53', variable: '--color-blue-steel' },
  { name: 'Burnt Orange', hex: '#E95C00', variable: '--color-burnt-orange' },
  { name: 'Olive', hex: '#657B52', variable: '--color-olive' },
  { name: 'Mustard', hex: '#FEC10B', variable: '--color-mustard' },
];

const neutralColors: ColorToken[] = [
  { name: 'Black', hex: '#3C3C3C', variable: '--color-black' },
  { name: 'Pure White', hex: '#FFFFFF', variable: '--color-pure-white' },
  { name: 'Dark Grey', hex: '#515151', variable: '--color-dark-grey' },
  { name: 'Light Grey', hex: '#D0D0D0', variable: '--color-light-grey' },
  { name: 'Soft Brown', hex: '#E3CDBF', variable: '--color-soft-brown' },
  { name: 'Blush', hex: '#E5AEA9', variable: '--color-blush' },
];

const ColorSwatch = ({ color }: { color: ColorToken }) => (
  <div className="color-swatch">
    <div className="color-swatch-display" style={{ backgroundColor: color.hex }} />
    <div className="color-swatch-info">
      <h4 className="color-name">{color.name}</h4>
      <p className="color-hex">{color.hex}</p>
    </div>
  </div>
);

interface LogoVariant {
  name: string;
  src: string;
  color: string;
}

const logoVariants: LogoVariant[] = [
  {
    name: 'Primary Pink',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/246947128199d8cbf0453aed16b26efc9a0578d1?width=1000',
    color: '#E34A6F',
  },
  {
    name: 'Yellow',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/00fa35183da88a51704045e18f3d178b06475f12?width=1000',
    color: '#FEC10B',
  },
  {
    name: 'Blue Steel',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/9664fce70f178f1b83b4012cdf59d06ee4da94f1?width=1000',
    color: '#383E53',
  },
  {
    name: 'Olive',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/5bf7ac99a481cb01c3259733b9f12cc741a036b4?width=1000',
    color: '#657B52',
  },
  {
    name: 'Black',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/28433a25bd12fbc9fdea37618464781960d4f48f?width=1000',
    color: '#3C3C3C',
  },
  {
    name: 'White',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/3529e79e360dcae9994728ee3a6dcb4d88e1669d?width=1000',
    color: '#FFFFFF',
  },
];

const logomarkVariants: LogoVariant[] = [
  {
    name: 'Pink',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/d7a63512e69aa0332a0121bafbfae43b7412edbd?width=480',
    color: '#E34A6F',
  },
  {
    name: 'Yellow',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/1a6142a0985baa979f30b4f53e1880b49d458653?width=480',
    color: '#FEC10B',
  },
  {
    name: 'Blue Steel',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/b89aad1357fa86e9ea16407159ea8ac354ace311?width=480',
    color: '#383E53',
  },
  {
    name: 'Olive',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/37e42124166220dd50f8780e2b3c3a3835c93a75?width=480',
    color: '#657B52',
  },
  {
    name: 'White',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/8797d1f119d34717f8dc0f3915a448844b935a66?width=480',
    color: '#FFFFFF',
  },
  {
    name: 'Default',
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/c5de0ecfce493bc3b5a57aa34281d4ade662b7c7?width=480',
    color: '#3C3C3C',
  },
];

export const Colors = () => (
  <div className="foundation-container">
    <h1 className="section-title">Color Palette</h1>
    <p className="section-description">
      The PipsQueak Pet Care brand color palette consists of vibrant primary colors and neutral tones designed to create a warm, approachable, and professional brand identity.
    </p>

    <div style={{ marginBottom: '64px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: '#3c3c3c' }}>
        Primary Colors
      </h2>
      <div className="colors-grid">
        {primaryColors.map((color) => (
          <ColorSwatch key={color.hex} color={color} />
        ))}
      </div>
    </div>

    <div>
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: '#3c3c3c' }}>
        Neutral & Base Colors
      </h2>
      <div className="colors-grid">
        {neutralColors.map((color) => (
          <ColorSwatch key={color.hex} color={color} />
        ))}
      </div>
    </div>
  </div>
);

export const Logo = () => (
  <div className="foundation-container">
    <h1 className="section-title">Logo - Full Brand</h1>
    <p className="section-description">
      The PipsQueak Pet Care logo is available in multiple color variants to suit different backgrounds and applications.
    </p>

    <div className="logo-showcase">
      <div className="logo-grid">
        {logoVariants.map((variant) => (
          <div key={variant.name} className="logo-item">
            <div className="logo-display" style={{ backgroundColor: variant.color === '#FFFFFF' ? '#f0f0f0' : 'white' }}>
              <img src={variant.src} alt={`PipsQueak Pet Care logo - ${variant.name}`} />
            </div>
            <p className="logo-label">{variant.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Logomark = () => (
  <div className="foundation-container">
    <h1 className="section-title">Logo - Mark</h1>
    <p className="section-description">
      The PipsQueak Pet Care logomark is a standalone icon ideal for favicons, app icons, and compact applications.
    </p>

    <div className="logo-showcase">
      <div className="logo-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {logomarkVariants.map((variant) => (
          <div key={variant.name} className="logo-item">
            <div className="logo-display" style={{ backgroundColor: variant.color === '#FFFFFF' ? '#f0f0f0' : 'white' }}>
              <img src={variant.src} alt={`PipsQueak Pet Care logomark - ${variant.name}`} />
            </div>
            <p className="logo-label">{variant.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
