import type { Meta, StoryObj } from '@storybook/react';
import { Icons, type IconType, type IconSize, type IconFill } from '../../design-system/icons/Icons';
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
  },
} satisfies Meta<typeof Icons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    type: 'warning',
    size: 'lg-24-px',
    filled: 'false',
  },
};

export const AllIcons: Story = {
  render: () => (
    <div className="atoms-icons-gallery">
      <div className="atoms-icons-grid">
        {iconTypes.map((iconType) => (
          <div key={iconType} className="atoms-icons-card">
            <div className="atoms-icons-variant-row">
              <Icons type={iconType} filled="false" />
              <Icons type={iconType} filled="true" />
            </div>
            <p className="atoms-icons-name">{iconType}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};
