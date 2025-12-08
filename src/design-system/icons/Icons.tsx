import React from 'react';
import './icons.css';

export type IconType =
  | 'add'
  | 'settings'
  | 'team'
  | 'close'
  | 'warning'
  | 'heart'
  | 'trash'
  | 'check'
  | 'check-circle'
  | 'help'
  | 'right-arrow'
  | 'two-chevrons-right'
  | 'time'
  | 'more-vert'
  | 'sparkle'
  | 'history'
  | 'edit'
  | 'paw'
  | 'home'
  | 'profile'
  | 'locked'
  | 'unlocked'
  | 'plus-circle'
  | 'plus'
  | 'chevron-up'
  | 'chevron-down'
  | 'close-circle'
  | 'right-arrow-long'
  | 'calendar';

export type IconSize = 'lg-24-px' | 'sm-16-px' | 'default-20-px';

export type IconFill = 'true' | 'false';

export interface IconsProps {
  type?: IconType;
  size?: IconSize;
  filled?: IconFill;
  className?: string;
  'aria-label'?: string;
}

const ICON_DEFAULT_LABELS: Partial<Record<IconType, string>> = {
  add: 'Add',
  settings: 'Settings',
  team: 'Team',
  close: 'Close',
  warning: 'Warning',
  heart: 'Heart',
  trash: 'Delete',
  check: 'Check',
  'check-circle': 'Success',
  help: 'Help',
  'right-arrow': 'Right arrow',
  'two-chevrons-right': 'Fast forward',
  time: 'Time',
  'more-vert': 'More options',
  sparkle: 'Sparkle',
  history: 'History',
  edit: 'Edit',
  paw: 'Paw',
  home: 'Home',
  profile: 'Profile',
  locked: 'Locked',
  unlocked: 'Unlocked',
  'plus-circle': 'Add item',
  plus: 'Plus',
  'chevron-up': 'Chevron up',
  'chevron-down': 'Chevron down',
  'close-circle': 'Close circle',
  'right-arrow-long': 'Right arrow long',
  calendar: 'Calendar',
};

import iconGlyph from '../../assets/icons/vector0.svg';

export const Icons: React.FC<IconsProps> = ({
  type = 'warning',
  size = 'lg-24-px',
  filled = 'false',
  className,
  'aria-label': ariaLabel,
}) => {
  const classes = [
    'icons',
    `type-${type}`,
    `size-${size}`,
    `filled-${filled}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const label = ariaLabel ?? ICON_DEFAULT_LABELS[type] ?? 'Icon';

  return (
    <div className={classes} role="img" aria-label={label}>
      <img className="vector" src={iconGlyph} alt="" aria-hidden="true" />
    </div>
  );
};

export default Icons;
