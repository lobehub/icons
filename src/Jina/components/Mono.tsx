'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M5.53 23.3a5.53 5.53 0 100-11.06 5.53 5.53 0 000 11.06zM22.673.018C23.41.018 24 .608 24 1.346v10.802c0 6.156-4.977 11.17-11.06 11.244V12.166l-.037-10.839C12.903.59 13.493 0 14.23 0h8.59l-.147.018z" />
    </svg>
  );
});

export default Icon;
