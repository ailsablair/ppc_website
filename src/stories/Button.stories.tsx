import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonVariant, type ButtonFill, type ButtonSize, type ButtonState } from './Button';
import './button.css';

const variants: ButtonVariant[] = ['default', 'secondary', 'ghost', 'tertiary'];
const fills: ButtonFill[] = ['default', 'alt'];
const sizes: ButtonSize[] = ['large', 'default', 'small'];
const states: ButtonState[] = ['default', 'hover', 'focus', 'disabled'];

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: variants,
    },
    fill: {
      control: 'inline-radio',
      options: fills,
    },
    size: {
      control: 'inline-radio',
      options: sizes,
    },
    state: {
      control: 'inline-radio',
      options: states,
    },
    showIcon: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: 'default',
    fill: 'default',
    size: 'large',
    state: 'default',
    showIcon: true,
    label: 'Book a stay',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="atoms-buttons-gallery">
      <div className="atoms-buttons-grid">
        {variants.map((variant) => (
          <div key={variant} className="atoms-buttons-card">
            <div className="atoms-buttons-row">
              {fills.map((fill) => (
                <div key={`${variant}-${fill}`} className="atoms-buttons-row">
                  {sizes.map((size) => (
                    <Button
                      key={`${variant}-${fill}-${size}`}
                      variant={variant}
                      fill={fill}
                      size={size}
                      state="default"
                    />
                  ))}
                </div>
              ))}
            </div>
            <p className="atoms-buttons-label">{variant}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};
