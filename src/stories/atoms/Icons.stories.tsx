import type { Meta, StoryObj } from '@storybook/react';
import { Icons, type IconType, type IconSize, type IconColour } from '../../design-system/icons/Icons';
import './icons.stories.css';

const iconTypes: IconType[] = [
  'settings',
  'team',
  'add',
  'profile',
  'time',
  'check-circle',
  'check',
  'heart',
  'trash',
  'home',
  'locked',
  'unlocked',
  'help',
  'more-vert',
  'close-circle',
  'right-arrow-long',
  'calendar',
  'warning',
];

const sizes: IconSize[] = ['sm-16px', 'default-20px', 'lg-24px'];
const colours: IconColour[] = ['white', 'black', 'yellow'];

const meta = {
  title: 'Atoms/Icons',
  component: Icons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: iconTypes,
    },
    size: {
      control: 'inline-radio',
      options: sizes,
    },
    filled: {
      control: 'boolean',
    },
    colour: {
      control: 'inline-radio',
      options: colours,
    },
  },
} satisfies Meta<typeof Icons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    type: 'add',
    size: 'default-20px',
    filled: true,
    colour: 'black',
  },
};

export const AllIcons: Story = {
  render: () => (
    <div className="atoms-icons-gallery">
      <div className="atoms-icons-grid">
        {iconTypes.map((iconType) => (
          <div key={iconType} className="atoms-icons-card">
            <div className="atoms-icons-variant-row atoms-icons-variant-row-multi">
              {colours.map((colour) => (
                <div key={colour} className="atoms-icons-variant-cell">
                  <div className="atoms-icons-variant-pair">
                    <Icons type={iconType} filled={false} colour={colour} />
                    <Icons type={iconType} filled colour={colour} />
                  </div>
                  <p className="atoms-icons-variant-label">{colour}</p>
                </div>
              ))}
            </div>
            <p className="atoms-icons-name">{iconType}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};
