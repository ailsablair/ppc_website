import type { Meta, StoryObj } from '@storybook/react';
import { BgPattern, type BgPatternColour, type BgPatternType } from '../../design-system/bg-pattern/BgPattern';
import './bg-pattern.stories.css';

const bgPatternColours: BgPatternColour[] = [
  'mustard',
  'white',
  'blue-steel-300',
  'pink-200',
  'olive',
  'black',
  'pink',
  'dark-grey-300',
  'default',
];

const bgPatternTypes: BgPatternType[] = ['website-bg', 'default', 'paw-prints'];

const colourLabels: Record<BgPatternColour, string> = {
  mustard: 'Mustard',
  white: 'White',
  'blue-steel-300': 'Blue Steel 300',
  'pink-200': 'Pink 200',
  olive: 'Olive',
  black: 'Black',
  pink: 'Pink',
  'dark-grey-300': 'Dark Grey 300',
  default: 'Default (Grey)',
};

const meta = {
  title: 'Foundations/Background Patterns',
  component: BgPattern,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colour: {
      control: 'select',
      options: bgPatternColours,
    },
    type: {
      control: 'select',
      options: bgPatternTypes,
    },
  },
} satisfies Meta<typeof BgPattern>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    colour: 'mustard',
    type: 'website-bg',
  },
};

export const WebsiteBackgroundColours: Story = {
  render: () => (
    <div className="foundations-bg-pattern-gallery">
      <div className="foundations-bg-pattern-grid">
        {bgPatternColours.map((colour) => (
          <div key={colour} className="foundations-bg-pattern-card">
            <div className="foundations-bg-pattern-swatch">
              <BgPattern colour={colour} type="website-bg" />
            </div>
            <p className="foundations-bg-pattern-name">{colourLabels[colour]}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Tiles: Story = {
  render: () => (
    <div className="foundations-bg-pattern-gallery">
      <div className="foundations-bg-pattern-grid foundations-bg-pattern-grid--tiles">
        <div className="foundations-bg-pattern-card">
          <div className="foundations-bg-pattern-swatch foundations-bg-pattern-swatch--tile">
            <BgPattern type="default" colour="default" />
          </div>
          <p className="foundations-bg-pattern-name">Default pattern</p>
        </div>
        <div className="foundations-bg-pattern-card">
          <div className="foundations-bg-pattern-swatch foundations-bg-pattern-swatch--tile">
            <BgPattern type="paw-prints" colour="default" />
          </div>
          <p className="foundations-bg-pattern-name">Paw prints pattern</p>
        </div>
      </div>
    </div>
  ),
};
