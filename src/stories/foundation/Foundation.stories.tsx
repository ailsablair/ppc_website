import type { Meta } from '@storybook/react';
import './colors.css';
import './design-tokens.css';

const meta = {
  title: 'Foundations',
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

interface TypographyToken {
  name: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  letterSpacing: string;
  lineHeight: string;
  textTransform?: string;
  textDecoration?: string;
}

const typographyTokens = {
  headings: [
    {
      name: 'H1 - Bold',
      fontFamily: 'Author',
      fontSize: '72px',
      fontWeight: 600,
      letterSpacing: '0.25%',
      lineHeight: '95%',
    },
    {
      name: 'H1 - Regular',
      fontFamily: 'Author',
      fontSize: '72px',
      fontWeight: 400,
      letterSpacing: '0.25%',
      lineHeight: '95%',
    },
    {
      name: 'H2 - Bold',
      fontFamily: 'Author',
      fontSize: '64px',
      fontWeight: 600,
      letterSpacing: '0.25%',
      lineHeight: '110%',
    },
    {
      name: 'H3 - Bold',
      fontFamily: 'Author',
      fontSize: '48px',
      fontWeight: 600,
      letterSpacing: '0.15%',
      lineHeight: '54px',
    },
  ] as TypographyToken[],
  body: [
    {
      name: 'Body - Large',
      fontFamily: 'Clash Grotesk',
      fontSize: '24px',
      fontWeight: 400,
      letterSpacing: '0.75%',
      lineHeight: '125%',
    },
    {
      name: 'Body - Regular',
      fontFamily: 'Clash Grotesk',
      fontSize: '19px',
      fontWeight: 400,
      letterSpacing: '0.75%',
      lineHeight: '120%',
    },
    {
      name: 'Body - Small',
      fontFamily: 'Clash Grotesk',
      fontSize: '16px',
      fontWeight: 400,
      letterSpacing: '2.75%',
      lineHeight: '120%',
    },
    {
      name: 'Footnote',
      fontFamily: 'Clash Grotesk',
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: '2.25%',
      lineHeight: '28px',
    },
  ] as TypographyToken[],
  labels: [
    {
      name: 'Eyebrow',
      fontFamily: 'Pirage',
      fontSize: '20px',
      fontWeight: 600,
      letterSpacing: '2%',
      lineHeight: '105%',
      textTransform: 'uppercase',
    },
    {
      name: 'Label',
      fontFamily: 'Pirage',
      fontSize: '32px',
      fontWeight: 400,
      letterSpacing: '2%',
      lineHeight: '105%',
    },
  ] as TypographyToken[],
};

interface ShadowToken {
  name: string;
  value: string;
  color: string;
}

const shadowTokens: ShadowToken[] = [
  { name: 'Large Shadow', value: '0 4px 24px rgba(0, 0, 0, 0.12)', color: 'rgba(0, 0, 0, 0.12)' },
  { name: 'Default Shadow', value: '0 4px 16px rgba(0, 0, 0, 0.12)', color: 'rgba(0, 0, 0, 0.12)' },
  { name: 'Small Shadow', value: '0 4px 8px rgba(0, 0, 0, 0.12)', color: 'rgba(0, 0, 0, 0.12)' },
  { name: 'Pink Hover', value: '0 6px 0 0 #f7a5a5', color: '#f7a5a5' },
  { name: 'Olive Hover', value: '0 6px 0 0 #c1d7ae', color: '#c1d7ae' },
  { name: 'Mustard Hover', value: '0 6px 0 0 #fee7a3', color: '#fee7a3' },
  { name: 'Blue Steel Hover', value: '0 6px 0 0 #5d688a', color: '#5d688a' },
  { name: 'Orange Hover', value: '0 6px 0 0 #fe8d53', color: '#fe8d53' },
];

const TypographyCard = ({ token }: { token: TypographyToken }) => (
  <div style={{
    padding: '24px',
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    marginBottom: '16px',
  }}>
    <p style={{
      fontFamily: token.fontFamily,
      fontSize: token.fontSize,
      fontWeight: token.fontWeight,
      letterSpacing: token.letterSpacing,
      lineHeight: token.lineHeight,
      textTransform: (token.textTransform as any) || 'none',
      textDecoration: (token.textDecoration as any) || 'none',
      margin: '0 0 16px 0',
      color: '#3c3c3c',
    }}>
      {token.name}
    </p>
    <div style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace' }}>
      <p style={{ margin: '4px 0' }}>Font: {token.fontFamily}</p>
      <p style={{ margin: '4px 0' }}>Size: {token.fontSize} / Weight: {token.fontWeight}</p>
      <p style={{ margin: '4px 0' }}>Line Height: {token.lineHeight} / Letter Spacing: {token.letterSpacing}</p>
    </div>
  </div>
);

const ShadowCard = ({ token }: { token: ShadowToken }) => (
  <div style={{
    padding: '24px',
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: token.value,
    marginBottom: '16px',
  }}>
    <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600', color: '#3c3c3c' }}>
      {token.name}
    </h4>
    <p style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace', margin: '8px 0' }}>
      {token.value}
    </p>
  </div>
);

export const Typography = () => (
  <div className="foundation-container">
    <h1 className="section-title">Typography</h1>
    <p className="section-description">
      PipsQueak Pet Care uses a carefully curated set of typefaces to create a warm, approachable, and professional visual identity.
    </p>

    <div style={{ marginBottom: '64px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: '#3c3c3c' }}>
        Headings
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {typographyTokens.headings.map((token) => (
          <TypographyCard key={token.name} token={token} />
        ))}
      </div>
    </div>

    <div style={{ marginBottom: '64px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: '#3c3c3c' }}>
        Body Text
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {typographyTokens.body.map((token) => (
          <TypographyCard key={token.name} token={token} />
        ))}
      </div>
    </div>

    <div>
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: '#3c3c3c' }}>
        Labels & Accents
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {typographyTokens.labels.map((token) => (
          <TypographyCard key={token.name} token={token} />
        ))}
      </div>
    </div>
  </div>
);

export const Effects = () => (
  <div className="foundation-container">
    <h1 className="section-title">Effects & Shadows</h1>
    <p className="section-description">
      Shadows and effects are used to create depth, hierarchy, and interactive feedback throughout the design system.
    </p>

    <div>
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: '#3c3c3c' }}>
        Shadow System
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
        {shadowTokens.map((token) => (
          <ShadowCard key={token.name} token={token} />
        ))}
      </div>
    </div>
  </div>
);
