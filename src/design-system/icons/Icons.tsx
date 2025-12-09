import React from 'react';
import './icons.css';

export type IconType =
  | 'settings'
  | 'team'
  | 'add'
  | 'profile'
  | 'time'
  | 'check-circle'
  | 'check'
  | 'heart'
  | 'trash'
  | 'home'
  | 'locked'
  | 'unlocked'
  | 'help'
  | 'more-vert'
  | 'close-circle'
  | 'right-arrow-long'
  | 'calendar'
  | 'warning'
  | 'right-arrow'
  | 'two-chevrons-right'
  | 'sparkle'
  | 'history'
  | 'edit'
  | 'paw'
  | 'plus-circle'
  | 'plus'
  | 'chevron-up'
  | 'chevron-down'
  | 'close';

export type IconSize = 'sm-16px' | 'default-20px' | 'lg-24px';

export type IconColour = 'white' | 'black' | 'yellow';

export interface IconsProps {
  type?: IconType;
  size?: IconSize;
  filled?: boolean;
  colour?: IconColour;
  className?: string;
  'aria-label'?: string;
}

interface IconRenderOptions {
  size: IconSize;
  filled: boolean;
}

const renderSettings = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 22 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M15.59 4.59L13.18 3.5L15.59 2.41L16.68 0L17.77 2.41L20.18 3.5L17.77 4.59L16.68 7L15.59 4.59ZM19.46 10.72L18.68 9L17.9 10.72L16.18 11.5L17.9 12.28L18.68 14L19.46 12.28L21.18 11.5L19.46 10.72ZM14.42 12.37L16.36 13.84L13.86 18.17L11.62 17.23C11.42 17.36 11.2 17.49 10.98 17.6L10.68 20H5.68L5.38 17.59C5.16 17.48 4.95 17.36 4.74 17.22L2.5 18.16L0 13.83L1.94 12.36C1.93 12.25 1.93 12.12 1.93 12C1.93 11.88 1.93 11.75 1.94 11.63L0 10.16L2.5 5.83L4.74 6.77C4.94 6.64 5.16 6.51 5.38 6.4L5.68 4H10.68L10.98 6.41C11.2 6.52 11.41 6.64 11.62 6.78L13.86 5.84L16.36 10.17L14.42 11.64C14.43 11.76 14.43 11.88 14.43 12.01C14.43 12.14 14.43 12.25 14.42 12.37ZM11.18 12C11.18 10.34 9.84 9 8.18 9C6.52 9 5.18 10.34 5.18 12C5.18 13.66 6.52 15 8.18 15C9.84 15 11.18 13.66 11.18 12Z"
      fill="currentColor"
    />
  </svg>
);

const renderTeam = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 24 12"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M16.24 7.65C15.07 7.13 13.63 6.75 12 6.75C10.37 6.75 8.93 7.14 7.76 7.65C6.68 8.13 6 9.21 6 10.39V12H18V10.39C18 9.21 17.32 8.13 16.24 7.65Z"
      fill="currentColor"
    />
    <path
      d="M1.22 8.58C0.48 8.9 0 9.62 0 10.43V12H4.5V10.39C4.5 9.56 4.73 8.78 5.13 8.1C4.76 8.04 4.39 8 4 8C3.01 8 2.07 8.21 1.22 8.58Z"
      fill="currentColor"
    />
    <path
      d="M22.78 8.58C21.93 8.21 20.99 8 20 8C19.61 8 19.24 8.04 18.87 8.1C19.27 8.78 19.5 9.56 19.5 10.39V12H24V10.43C24 9.62 23.52 8.9 22.78 8.58Z"
      fill="currentColor"
    />
    <path
      d="M12 6C13.66 6 15 4.66 15 3C15 1.34 13.66 0 12 0C10.34 0 9 1.34 9 3C9 4.66 10.34 6 12 6Z"
      fill="currentColor"
    />
    <path
      d="M3.9999 2.49687L1.49677 5L3.9999 7.50313L6.50303 5L3.9999 2.49687Z"
      fill="currentColor"
    />
    <path d="M20 3L17.5 7H22.5L20 3Z" fill="currentColor" />
  </svg>
);

const renderAdd = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
  </svg>
);

const renderProfile = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 4C11.93 4 13.5 5.57 13.5 7.5C13.5 9.43 11.93 11 10 11C8.07 11 6.5 9.43 6.5 7.5C6.5 5.57 8.07 4 10 4ZM10 18C7.97 18 5.57 17.18 3.86 15.12C5.55 13.8 7.68 13 10 13C12.32 13 14.45 13.8 16.14 15.12C14.43 17.18 12.03 18 10 18Z"
      fill="currentColor"
    />
  </svg>
);

const renderTime = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M22 5.72L17.4 1.86L16.11 3.39L20.71 7.25L22 5.72ZM7.88 3.39L6.6 1.86L2 5.71L3.29 7.24L7.88 3.39ZM12.5 8H11V14L15.75 16.85L16.5 15.62L12.5 13.25V8ZM12 4C7.03 4 3 8.03 3 13C3 17.97 7.02 22 12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4ZM12 20C8.13 20 5 16.87 5 13C5 9.13 8.13 6 12 6C15.87 6 19 9.13 19 13C19 16.87 15.87 20 12 20Z"
      fill="currentColor"
    />
  </svg>
);

const renderCheckCircle = (filled: boolean) => {
  if (filled) {
    return (
      <svg
        className="ppc-icon__svg"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      className="ppc-icon__svg"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16.59 7.58L10 14.17L6.41 10.59L5 12L10 17L18 9L16.59 7.58ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
        fill="currentColor"
      />
    </svg>
  );
};

const renderCheck = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z"
      fill="currentColor"
    />
  </svg>
);

const renderHeart = (filled: boolean) => {
  if (filled) {
    return (
      <svg
        className="ppc-icon__svg"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      className="ppc-icon__svg"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13.75 2.5C12.3 2.5 10.9083 3.175 10 4.24167C9.09167 3.175 7.7 2.5 6.25 2.5C3.68333 2.5 1.66667 4.51667 1.66667 7.08333C1.66667 10.2333 4.5 12.8 8.79167 16.7L10 17.7917L11.2083 16.6917C15.5 12.8 18.3333 10.2333 18.3333 7.08333C18.3333 4.51667 16.3167 2.5 13.75 2.5ZM10.0833 15.4583L10 15.5417L9.91667 15.4583C5.95 11.8667 3.33333 9.49167 3.33333 7.08333C3.33333 5.41667 4.58333 4.16667 6.25 4.16667C7.53333 4.16667 8.78333 4.99167 9.225 6.13333H10.7833C11.2167 4.99167 12.4667 4.16667 13.75 4.16667C15.4167 4.16667 16.6667 5.41667 16.6667 7.08333C16.6667 9.49167 14.05 11.8667 10.0833 15.4583Z"
        fill="currentColor"
      />
    </svg>
  );
};

const renderTrash = (filled: boolean) => {
  if (filled) {
    return (
      <svg
        className="ppc-icon__svg"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      className="ppc-icon__svg"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

const renderHome = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="currentColor" />
  </svg>
);

const renderLocked = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 16 21"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16ZM14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM4.9 5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7H4.9V5ZM14 19H2V9H14V19Z"
      fill="currentColor"
    />
  </svg>
);

const renderUnlocked = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 16 21"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2 21C1.45 21 0.979333 20.8043 0.588 20.413C0.196 20.021 0 19.55 0 19V9C0 8.45 0.196 7.979 0.588 7.587C0.979333 7.19567 1.45 7 2 7H11V5C11 3.24 8.76 1 6 1C4.61667 1 3.43767 1.48733 2.462 2.462C1.48733 3.43733 1 4.61667 1 6C1 6.28333 0.904 6.52067 0.712 6.712C0.520667 6.904 0.283333 7 0 7C-0.283333 7 -0.520667 6.904 -0.712 6.712C-0.904 6.52067 -1 6.28333 -1 6C-1 4.33333 -0.45 2.91667 0.65 1.75C1.81667 0.583333 3.23333 0 4.9 0C6.56667 0 8.01667 0.583333 9.25 1.75C10.4833 2.91667 11.1 4.33333 11.1 6V7H14C15.1 7 16 7.9 16 9V19C16 20.1 15.1 21 14 21H2ZM8 16C9.1 16 10 15.1 10 14C10 12.9 9.1 12 8 12C6.9 12 6 12.9 6 14C6 15.1 6.9 16 8 16Z"
      fill="currentColor"
    />
  </svg>
);

const renderHelp = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M9.95 16C10.3 16 10.596 15.879 10.838 15.637C11.0793 15.3957 11.2 15.1 11.2 14.75C11.2 14.4 11.0793 14.1043 10.838 13.863C10.596 13.621 10.3 13.5 9.95 13.5C9.6 13.5 9.304 13.621 9.062 13.863C8.82067 14.1043 8.7 14.4 8.7 14.75C8.7 15.1 8.82067 15.3957 9.062 15.637C9.304 15.879 9.6 16 9.95 16ZM10.1 5.7C10.5667 5.7 10.9417 5.829 11.225 6.087C11.5083 6.34567 11.65 6.68333 11.65 7.1C11.65 7.38333 11.5543 7.67067 11.363 7.962C11.171 8.254 10.9 8.55833 10.55 8.875C10.05 9.30833 9.68333 9.725 9.45 10.125C9.21667 10.525 9.1 10.925 9.1 11.325C9.1 11.5583 9.18767 11.754 9.363 11.912C9.53767 12.0707 9.74167 12.15 9.975 12.15C10.2083 12.15 10.4167 12.0667 10.6 11.9C10.7833 11.7333 10.9 11.525 10.95 11.275C11 10.9917 11.1127 10.7293 11.288 10.488C11.4627 10.246 11.75 9.93333 12.15 9.55C12.6667 9.06667 13.0293 8.625 13.238 8.225C13.446 7.825 13.55 7.38333 13.55 6.9C13.55 6.05 13.2293 5.354 12.588 4.812C11.946 4.27067 11.1167 4 10.1 4C9.4 4 8.77933 4.13333 8.238 4.4C7.696 4.66667 7.275 5.075 6.975 5.625C6.85833 5.84167 6.81667 6.054 6.85 6.262C6.88333 6.47067 7 6.64167 7.2 6.775C7.41667 6.90833 7.65433 6.95 7.913 6.9C8.171 6.85 8.38333 6.70833 8.55 6.475C8.73333 6.225 8.95433 6.03333 9.213 5.9C9.471 5.76667 9.76667 5.7 10.1 5.7ZM10 20C8.63333 20 7.34167 19.7373 6.125 19.212C4.90833 18.6873 3.846 17.975 2.938 17.075C2.02933 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.02933 3.825 2.938 2.925C3.846 2.025 4.90833 1.31233 6.125 0.787C7.34167 0.262333 8.63333 0 10 0C11.4 0 12.7083 0.262333 13.925 0.787C15.1417 1.31233 16.2 2.025 17.1 2.925C18 3.825 18.7083 4.88333 19.225 6.1C19.7417 7.31667 20 8.61667 20 10C20 11.3833 19.7417 12.6833 19.225 13.9C18.7083 15.1167 18 16.175 17.1 17.075C16.2 17.975 15.1417 18.6873 13.925 19.212C12.7083 19.7373 11.4 20 10 20Z"
      fill="currentColor"
    />
  </svg>
);

const renderMoreVert = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
      fill="currentColor"
    />
  </svg>
);

const renderCloseCircle = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5.7 14.3C5.88333 14.4833 6.11667 14.575 6.4 14.575C6.68333 14.575 6.91667 14.4833 7.1 14.3L10 11.4L12.925 14.325C13.1083 14.5083 13.3377 14.5957 13.613 14.587C13.8877 14.579 14.1167 14.4833 14.3 14.3C14.4833 14.1167 14.575 13.8833 14.575 13.6C14.575 13.3167 14.4833 13.0833 14.3 12.9L11.4 10L14.325 7.075C14.5083 6.89167 14.5957 6.66233 14.587 6.387C14.579 6.11233 14.4833 5.88333 14.3 5.7C14.1167 5.51667 13.8833 5.425 13.6 5.425C13.3167 5.425 13.0833 5.51667 12.9 5.7L10 8.6L7.075 5.675C6.89167 5.49167 6.66267 5.404 6.388 5.412C6.11267 5.42067 5.88333 5.51667 5.7 5.7C5.51667 5.88333 5.425 6.11667 5.425 6.4C5.425 6.68333 5.51667 6.91667 5.7 7.1L8.6 10L5.675 12.925C5.49167 13.1083 5.40433 13.3373 5.413 13.612C5.421 13.8873 5.51667 14.1167 5.7 14.3ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
      fill="currentColor"
    />
  </svg>
);

const renderRightArrowLong = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5.7635 11.175C5.63017 11.175 5.50517 11.154 5.3885 11.112C5.27183 11.0707 5.1635 11 5.0635 10.9C4.8635 10.7 4.7635 10.4627 4.7635 10.188C4.7635 9.91267 4.85517 9.68333 5.0385 9.5L7.4635 7.075H1C0.716667 7.075 0.479333 6.979 0.288 6.787C0.0960001 6.59567 0 6.35833 0 6.075C0 5.79167 0.0960001 5.554 0.288 5.362C0.479333 5.17067 0.716667 5.075 1 5.075H7.4635L5.0385 2.65C4.85517 2.46667 4.7635 2.23733 4.7635 1.962C4.7635 1.68733 4.8635 1.45 5.0635 1.25C5.24683 1.06667 5.48017 0.975 5.7635 0.975C6.04683 0.975 6.28017 1.06667 6.4635 1.25L11.4635 6.25C11.5635 6.35 11.6385 6.45833 11.6885 6.575C11.7385 6.69167 11.7552 6.81667 11.7385 6.95C11.7385 7.08333 11.7178 7.20833 11.6765 7.325C11.6345 7.44167 11.5635 7.55 11.4635 7.65L6.4635 12.65C6.2635 12.85 6.02617 12.9457 5.7515 12.937C5.47617 12.929 5.24683 12.8333 5.0635 12.65C4.8635 12.45 4.7635 12.2123 4.7635 11.937C4.7635 11.6623 4.85517 11.4333 5.0385 11.25L5.7635 11.175Z"
      fill="currentColor"
    />
  </svg>
);

const renderCalendar = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z"
      fill="currentColor"
    />
  </svg>
);

const renderWarning = () => (
  <svg
    className="ppc-icon__svg"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M12 5.99L19.53 19H4.47L12 5.99ZM12 2L1 21H23L12 2Z" fill="currentColor" />
    <path d="M13 16H11V18H13V16Z" fill="currentColor" />
    <path d="M13 10H11V15H13V10Z" fill="currentColor" />
  </svg>
);

const iconRenderers: Record<IconType, (options: IconRenderOptions) => JSX.Element> = {
  settings: () => renderSettings(),
  team: () => renderTeam(),
  add: () => renderAdd(),
  profile: () => renderProfile(),
  time: () => renderTime(),
  'check-circle': ({ filled }) => renderCheckCircle(filled),
  check: () => renderCheck(),
  heart: ({ filled }) => renderHeart(filled),
  trash: ({ filled }) => renderTrash(filled),
  home: () => renderHome(),
  locked: () => renderLocked(),
  unlocked: () => renderUnlocked(),
  help: () => renderHelp(),
  'more-vert': () => renderMoreVert(),
  'close-circle': () => renderCloseCircle(),
  'right-arrow-long': () => renderRightArrowLong(),
  calendar: () => renderCalendar(),
  warning: () => renderWarning(),
  // Aliases
  'right-arrow': (opts) => iconRenderers['right-arrow-long'](opts),
  'two-chevrons-right': (opts) => iconRenderers['right-arrow-long'](opts),
  sparkle: (opts) => iconRenderers.help(opts),
  history: (opts) => iconRenderers.time(opts),
  edit: (opts) => iconRenderers.time(opts),
  paw: (opts) => iconRenderers.home(opts),
  'plus-circle': (opts) => iconRenderers['check-circle'](opts),
  plus: (opts) => iconRenderers.add(opts),
  'chevron-up': (opts) => iconRenderers['right-arrow-long'](opts),
  'chevron-down': (opts) => iconRenderers['right-arrow-long'](opts),
  close: (opts) => iconRenderers['close-circle'](opts),
};

export const Icons: React.FC<IconsProps> = ({
  type = 'add',
  size = 'default-20px',
  filled = true,
  colour = 'black',
  className,
  'aria-label': ariaLabel,
}) => {
  const renderer = iconRenderers[type];

  const classes = [
    'ppc-icon',
    `ppc-icon--type-${type}`,
    `ppc-icon--size-${size}`,
    `ppc-icon--filled-${filled ? 'true' : 'false'}`,
    `ppc-icon--colour-${colour}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const role = ariaLabel ? 'img' : 'presentation';

  return (
    <span className={classes} aria-label={ariaLabel} role={role}>
      {renderer ? renderer({ size, filled }) : null}
    </span>
  );
};

export default Icons;
