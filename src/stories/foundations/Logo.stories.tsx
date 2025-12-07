import type { Meta, StoryObj } from '@storybook/react';
import { Logo, type LogoVariant } from '../../design-system/logo/Logo';
import './logo.stories.css';

const logoVariants: LogoVariant[] = [
  'primary',
  'pink',
  'yellow',
  'blue-steel',
  'olive',
  'black',
  'white',
  'alt',
];

const variantLabels: Record<LogoVariant, string> = {
  primary: 'Primary',
  pink: 'Pink',
  yellow: 'Yellow',
  'blue-steel': 'Blue Steel',
  olive: 'Olive',
  black: 'Black',
  white: 'White',
  alt: 'Alt',
};

const meta = {
  title: 'Foundations/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: logoVariants,
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: 'primary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="foundations-logo-gallery">
      <div className="foundations-logo-grid">
        {logoVariants.map((variant) => (
          <div key={variant} className="foundations-logo-card">
            <Logo variant={variant} />
            <p className="foundations-logo-name">{variantLabels[variant]}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};
