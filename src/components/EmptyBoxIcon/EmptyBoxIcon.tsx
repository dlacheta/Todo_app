import React from 'react';

const EmptyBoxIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="black"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />{' '}
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  );
};

export default EmptyBoxIcon;
