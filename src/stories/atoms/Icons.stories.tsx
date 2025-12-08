import type { Meta, StoryObj } from '@storybook/react';
import { Icons, type IconType, type IconSize, type IconFill, type IconColour } from '../../design-system/icons/Icons';
import './icons.stories.css';

const iconTypes: IconType[] = [
  'add',
  'settings',
  'team',
  'close',
  'warning',
  'heart',
  'trash',
  'check',
  'check-circle',
  'help',
  'right-arrow',
  'two-chevrons-right',
  'time',
  'more-vert',
  'sparkle',
  'history',
  'edit',
  'paw',
  'home',
  'profile',
  'locked',
  'unlocked',
  'plus-circle',
  'plus',
  'chevron-up',
  'chevron-down',
  'close-circle',
  'right-arrow-long',
  'calendar',
];

const sizes: IconSize[] = ['sm-16-px', 'default-20-px', 'lg-24-px'];
const fills: IconFill[] = ['false', 'true'];
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
      control: 'select',
      options: sizes,
    },
    filled: {
      control: 'inline-radio',
      options: fills,
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
    type: 'warning',
    size: 'lg-24-px',
    filled: 'false',
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
                    <Icons type={iconType} filled="false" colour={colour} />
                    <Icons type={iconType} filled="true" colour={colour} />
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
