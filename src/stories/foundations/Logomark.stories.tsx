import type { Meta, StoryObj } from '@storybook/react';
import { Logomark, type LogomarkVariant } from '../../design-system/logomark/Logomark';
import './logomark.stories.css';

const logomarkVariants: LogomarkVariant[] = [
  'default',
  'pink',
  'yellow',
  'blue-steel',
  'olive',
  'white',
];

const variantLabels: Record<LogomarkVariant, string> = {
  default: 'Default',
  pink: 'Pink',
  yellow: 'Yellow',
  'blue-steel': 'Blue Steel',
  olive: 'Olive',
  white: 'White',
};

const meta = {
  title: 'Foundations/Logomark',
  component: Logomark,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: logomarkVariants,
    },
  },
} satisfies Meta<typeof Logomark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: 'default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="foundations-logomark-gallery">
      <div className="foundations-logomark-grid">
        {logomarkVariants.map((variant) => (
          <div key={variant} className="foundations-logomark-card">
            <Logomark variant={variant} />
            <p className="foundations-logomark-name">{variantLabels[variant]}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};
