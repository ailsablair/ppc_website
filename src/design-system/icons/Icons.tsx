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

const ICON_SOURCES: Partial<Record<IconType, Partial<Record<IconFill, string>>>> = {
  warning: {
    false:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fa56b15f090494d36a551df715675ba73?format=webp&width=800',
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fd04fe51c5f2948259f49eefb4a7fcea0?format=webp&width=800',
  },
  calendar: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F6c1291692a0c4a699920460725255e19?format=webp&width=800',
  },
  'right-arrow-long': {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fa7062d68647742a698c1b10d928be23c?format=webp&width=800',
  },
  locked: {
    false:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F181ae08a69f74cc28e0db084b3c7853e?format=webp&width=800',
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F0a293849d8d3451e83e3dbfa94c47687?format=webp&width=800',
  },
  unlocked: {
    false:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F6ec022b8b6714baf93c1f1ad0e201a6b?format=webp&width=800',
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fc7177cf3820f45ce8c6a4d696c39b7de?format=webp&width=800',
  },
  check: {
    false:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F63599664c3e44615ae087262b9caca91?format=webp&width=800',
  },
  'close-circle': {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F7232eddc0dce47089f889dfb4a716612?format=webp&width=800',
  },
  'more-vert': {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Ff08f658bec7745b08573b2f1303d5200?format=webp&width=800',
  },
  help: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F2302011121874d088d5f22957ff0a12b?format=webp&width=800',
  },
  'right-arrow': {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fd2621cc242cd4588b48db7c3a4c720d6?format=webp&width=800',
  },
  sparkle: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fcc4c07c88aea4abfb0bd6aaee0882ef4?format=webp&width=800',
  },
  'chevron-up': {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F8f059a95bf164c3aa49458fb6e84c0ef?format=webp&width=800',
  },
  close: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fb06fd619977a44fa91829f783250401f?format=webp&width=800',
  },
  'two-chevrons-right': {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fed36d49c557c4d90b582952170f6e671?format=webp&width=800',
  },
  'chevron-down': {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F470032e43d86426991112505806ade15?format=webp&width=800',
  },
  edit: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fbab1654ffb984d939a2ac94da7e0aa2c?format=webp&width=800',
  },
  'plus-circle': {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F5ef806a54e174339bd677e75946fdefc?format=webp&width=800',
  },
  plus: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fe5580760c69b459db8e7988f6ba6cdfc?format=webp&width=800',
  },
  paw: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F8b45434e3c9242a09a97e9fd9c4f0534?format=webp&width=800',
  },
  history: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fc04e269c8bc54af68e858ae5d7cf0bda?format=webp&width=800',
  },
  home: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F6f5aef50c2a44b7f9057e1bb8dd735d3?format=webp&width=800',
  },
  heart: {
    false:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F27026780892f4b129988fde1002e4132?format=webp&width=800',
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fb34d04cf97124c1e9eb713d35f6720a2?format=webp&width=800',
  },
  trash: {
    false:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fe14a1ee24a54413aa16c318ce6f90f61?format=webp&width=800',
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F96f8f434d74d4344b993bd2fe9d8eae8?format=webp&width=800',
  },
  'check-circle': {
    false:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F12052099bf2f408ba7dcdf70e96b36d2?format=webp&width=800',
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fe20e155077184ba68460fc3d4b078098?format=webp&width=800',
  },
  time: {
    false:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fe336dfde33174d6c8ac6f028caf9347e?format=webp&width=800',
  },
  profile: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F9f0028e9c845438f93dcbfd6d09ce0d3?format=webp&width=800',
  },
  team: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F9573269a22e84a4ea1d7a12b48567320?format=webp&width=800',
  },
  add: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fe58a78eff4084e4289c847b3d37f4e63?format=webp&width=800',
  },
  settings: {
    true:
      'https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F60dbe0e843bf49be8fdc6b2fe60b499a?format=webp&width=800',
  },
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

  const typeSources = ICON_SOURCES[type] ?? {};
  const src = typeSources[filled] ?? typeSources.false ?? typeSources.true ?? iconGlyph;

  return (
    <div className={classes} role="img" aria-label={label}>
      <img className="vector" src={src} alt="" aria-hidden="true" />
    </div>
  );
};

export default Icons;
